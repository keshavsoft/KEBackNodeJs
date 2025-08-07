const fs = require('fs');
const path = require('path');

const StartFunc = ({ inToPath }) => {
    const folders = getFoldersInDirectory({ inToPath });

    if (folders.length === 0) {
        return false;
    } else {
        return folders[0];
    };
};

const getFoldersInDirectory = ({ inToPath }) => {
    try {
        const entries = fs.readdirSync(inToPath);
        const folders = [];

        for (const entry of entries) {
            if (path.extname(entry) === '.json') {
                folders.push(path.join(inToPath, entry));
            };
        };

        return folders;
    } catch (error) {
        console.error(`Error reading directory: ${error.message}`);
        return []; // Return an empty array or rethrow the error as needed
    }
};

module.exports = { StartFunc };