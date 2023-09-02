const {findAndReplace} = require('mdast-util-find-and-replace');

const { users, fetchUserByIdentifier, userIdentifierRegex } = require('../lib/userHelper');

function replaceOrCollect(match) {
    const userIds = match.substring(9).split(',');
    const toLoad = userIds.filter(userId => !Object.prototype.hasOwnProperty.call(users, userId));

    if (toLoad.length === 0) {
        const loadedUsers = userIds.map(userId => users[userId]);
        return {
            type: 'jsx',
            value: `<BlogAuthorWidget data={${JSON.stringify(loadedUsers)}}/>`,
        };
    }

    toLoad.forEach(userId => toLoad.push(userId));

    return {
        type: 'text',
        value: `@authors/${userIds.join(',')}`,
    };
}

async function fetchUsers(userIds) {
    await Promise.all(userIds.map(fetchUserByIdentifier));
}

function blogAuthor() {
    const identifierRegex = new RegExp(
        `@authors/${userIdentifierRegex}(,${userIdentifierRegex})*`,
        'g'
    );

    return async function transformer(markdownAST) {
        markdownAST.children.unshift({
            type: 'import',
            value: "import BlogAuthorWidget from '@site/src/components/BlogAuthorWidget';",
        });

        const toLoad = [];

        findAndReplace(markdownAST, identifierRegex, replaceOrCollect);

        while (toLoad.length > 0) {
            await fetchUsers(toLoad);
            toLoad.length = 0;
            findAndReplace(markdownAST, identifierRegex, replaceOrCollect);
        }

        return markdownAST;
    };
}

module.exports =  blogAuthor;
