const fs = require('fs').promises;
const fetch = require('node-fetch');
const jsonHelper = require("./jsonHelper");

const CDN_URL = 'https://cdn.discordapp.com';
const API_URL_DISCORD = 'https://japi.rest/discord/v1/user/';
const API_URL_GITHUB = 'https://api.github.com/users/';
const DISCORD_USER_TYPE = 'discord';
const GITHUB_USER_TYPE = 'github';

const SNOWFLAKE_REGEX = /^[0-9]+$/;
const IDENTIFIER_REGEX = /((discord:)?[0-9]+|github:[0-9a-zA-Z-_]+)/;
const BASE_USER = {
    notFound: true,
    type: DISCORD_USER_TYPE,
    name: 'Unknown User',
    username: '',
    url: null,
}

async function persist(users) {
    await fs.writeFile('./users.fetched.json', JSON.stringify(users));
}

function avatarUrl({ id, discriminator, avatar }, size = 128) {
    if (avatar) {
        const format = avatar.startsWith('a_') ? 'gif' : 'webp';
        return `${CDN_URL}/avatars/${id}/${avatar}.${format}?size=${size}`;
    } else {
        return `${CDN_URL}/embed/avatars/${parseInt(discriminator ?? id) % 5}.png?size=32`;
    }
}

async function fetchByIdentifier(users, identifier) {
    if (users[identifier]) return users[identifier];

    let user = {
        ...BASE_USER,
        id: identifier,
        avatarUrl: avatarUrl({ id: identifier }),
    };

    if (SNOWFLAKE_REGEX.test(identifier) || identifier.startsWith('discord:')) {
        const userId = identifier.startsWith('discord:') ? identifier.substring(8) : identifier;
        const res = await fetch(`${API_URL_DISCORD}${userId}`);

        if (res.ok) {
            const discordUser = await res.json();
            user = {
                ...user,
                notFound: false,
                id: discordUser.id,
                name: discordUser.username,
                username: discordUser.username,
                avatarUrl: avatarUrl(discordUser),
                url: `https://discord.com/users/${userId}`,
            };
        } else {
            console.log(`Failed to fetch discord user with the id ${userId}.`);
        }
    } else if (identifier.startsWith('github:')) {
        const username = identifier.substring(7);
        const res = await fetch(`${API_URL_GITHUB}${username}`);

        if (res.ok) {
            const githubUser = await res.json();
            user = {
                ...user,
                notFound: false,
                type: GITHUB_USER_TYPE,
                id: githubUser.id,
                name: githubUser.name || githubUser.login,
                username: githubUser.login,
                avatarUrl: githubUser.avatar_url,
                url: githubUser.html_url,
            };
        } else {
            console.log(`Failed to fetch github user with the username ${username}.`);
        }
    }

    users[identifier] = user;
    await jsonHelper.writeJSON(users);
    return user;
}

module.exports = { load: jsonHelper.loadJSON, fetchByIdentifier, avatarUrl, identifierRegex: IDENTIFIER_REGEX };
