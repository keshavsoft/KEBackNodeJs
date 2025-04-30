const fs = require('fs');
const path = require("path");

const StartFunc = ({ inSelectedFolderPath, inRouteNeeded }) => {
    const LocalRouteNeeded = inRouteNeeded;

    let LocalLines = [];

    LocalLines.push(`import express from 'express';`);
    LocalLines.push(`const router = express.Router();`);
    LocalLines.push(``);
    LocalLines.push(`export { router };`);

    const content = LocalLines.join('\n');

    const LocalToPath = path.join(inSelectedFolderPath, LocalRouteNeeded);

    try {
        fs.writeFileSync(`${LocalToPath}/routes.js`, content);
        return true;
    } catch (error) {
        return false;
    };
};

module.exports = { StartFunc };
