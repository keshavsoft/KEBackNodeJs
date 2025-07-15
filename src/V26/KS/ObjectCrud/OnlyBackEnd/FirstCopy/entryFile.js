const vscode = require('vscode');

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

        return true;
    } catch (error) {
        vscode.window.showErrorMessage(`Error: ${error.message}`);
    };
};

module.exports = { StartFunc };