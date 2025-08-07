const fse = require('fs-extra');
const path = require('path');

const StartFunc = async ({ inToPath, inVersionStart }) => {
    const folders = await getFoldersInDirectory({ inToPath, inVersionStart });

    if (folders.length === 0) {
        return 0
    } else {
        return folders.length + 1;
    };
};

const getFoldersInDirectory = async ({ inToPath, inVersionStart }) => {
    try {
        const entries = await fse.readdir(inToPath, { withFileTypes: true });
        const folders = [];

        for (const entry of entries) {
            if (entry.isDirectory()) {
                if (entry.name.startsWith(inVersionStart)) {
                    folders.push(path.join(inToPath, entry.name));
                };
            };
        };

        return folders;
    } catch (error) {
        console.error(`Error reading directory: ${error.message}`);
        return []; // Return an empty array or rethrow the error as needed
    }
};

module.exports = { StartFunc };