const {promises: fs} = require("fs");

async function loadJSON(jsonName = 'users.fetched.json') {
    const data = await fs.readFile(jsonName);
    return JSON.parse(data);
}

async function writeJSON(data, jsonName = 'users.fetched.json') {
    await fs.writeFile(jsonName, JSON.stringify(data));
}

module.exports = {
    loadJSON,
    writeJSON
}
