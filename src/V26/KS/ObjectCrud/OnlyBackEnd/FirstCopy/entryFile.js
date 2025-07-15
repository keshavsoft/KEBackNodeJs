const vscode = require('vscode');
const fse = require('fs-extra');
const path = require('path');

const { StartFunc: StartFuncFromChecks } = require('./Checks/forSchemaJson');
const { StartFunc: StartFuncFromCreateSchema } = require("./CreateSchema/entryFile");

const StartFunc = ({ inToPath }) => {
    try {
        const LocalToPath = inToPath;
        const LocalIfExists = StartFuncFromChecks({ inRootPath: LocalToPath });

        if (LocalIfExists === false) {
            StartFuncFromCreateSchema({ inToPath: LocalToPath });

            return false;
        };

        // const LocalFromPath = path.join(__dirname, "..", "CopyCode");

        // await fse.copy(LocalFromPath, LocalToPath);

        return true;
    } catch (error) {
        vscode.window.showErrorMessage(`Error: ${error.message}`);
    };
};

module.exports = { StartFunc };