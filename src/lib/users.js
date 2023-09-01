require('dotenv').config();
const {REST} = require('@discordjs/rest');
const axios = require('axios');
const {Octokit} = require('@octokit/rest');
const fs = require('fs');

const octokit = new Octokit();

const users = loadUsers();

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function loadUsers() {
    try {
        const rawData = fs.readFileSync('./users.generated.json');
        return JSON.parse(rawData);
    } catch (e) {
        return {};
    }
}

function persistUsers() {
    fs.writeFileSync('./users.generated.json', JSON.stringify(users));
}

const discordSnowflakeRegex = /^[0-9]+$/;
const userIdentifierRegex = '((discord:)?[0-9]+|github:[0-9a-zA-Z-_]+)';

function discordUserAvatarUrl({id, discriminator, avatar}, size = 128) {
    const DISCORD_CDN = 'https://cdn.discordapp.com';

    if (avatar) {
        if (avatar.startsWith('a_')) {
            return `${DISCORD_CDN}/avatars/${id}/${avatar}.gif?size=${size}`;
        } else {
            return `${DISCORD_CDN}/avatars/${id}/${avatar}.webp?size=${size}`;
        }
    } else {
        return `${DISCORD_CDN}/embed/avatars/${parseInt(discriminator ?? id) % 5}.png?size=32`;
    }
}

async function fetchUserByIdentifier(identifier) {
    if (users[identifier]) return users[identifier];

    let user = {
        notFound: true,
        type: 'discord',
        id: identifier,
        name: 'Unknown User',
        username: '',
        discriminator: '0000',
        avatarUrl: discordUserAvatarUrl({id: identifier}),
        url: null,
    };

    if (discordSnowflakeRegex.exec(identifier) || identifier.startsWith('discord:')) {
        let userId = identifier;
        if (identifier.startsWith('discord:')) {
            userId = identifier.substring(8);
        }

        try {
            const res = await axios.get('https://japi.rest/discord/v1/user/' + userId);
            await sleep(250);
            const discordUser = res.data?.data;
            if (discordUser) {
                user = {
                    type: 'discord',
                    id: discordUser.id,
                    name: discordUser.username,
                    username: `${discordUser.username}`,
                    discriminator: discordUser.discriminator,
                    avatarUrl: discordUserAvatarUrl(discordUser),
                    url: `https://discord.com/users/${identifier}`,
                };
            }
        } catch {
            console.log(`Failed to fetch discord user with the id ${userId}.`);
        }
    } else if (identifier.startsWith('github:')) {
        const username = identifier.substring(7);
        try {
            const resp = await octokit.rest.users.getByUsername({username});
            if (resp.status === 200) {
                const githubUser = resp.data;
                user = {
                    type: 'github',
                    id: githubUser.id,
                    name: githubUser.name || githubUser.login,
                    username: githubUser.login,
                    avatarUrl: githubUser.avatar_url,
                    url: `https://github.com/${githubUser.login}`,
                };
            } else {
                console.log(`Failed to fetch github user with the username ${username}.`);
            }
        } catch {
            console.log(`Failed to fetch github user with the username ${username}.`);
        }
    }

    users[identifier] = user;
    persistUsers();
    return user;
}

module.exports = {users, fetchUserByIdentifier, discordUserAvatarUrl, userIdentifierRegex};