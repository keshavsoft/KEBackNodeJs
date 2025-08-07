const vscode = require('vscode');
const fse = require('fs-extra');
const path = require('path');

const StartFunc = async ({ inToPath }) => {
    try {
        const LocalToPath = inToPath;
    
        const LocalFromPath = path.join(__dirname, "..", "CopyCode");

        await fse.copy(LocalFromPath, LocalToPath);

        return await true;
    } catch (error) {
        vscode.window.showErrorMessage(`Error: ${error.message}`);
    };
};

module.exports = { StartFunc };