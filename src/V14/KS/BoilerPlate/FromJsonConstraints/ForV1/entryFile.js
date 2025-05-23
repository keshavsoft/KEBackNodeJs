const vscode = require('vscode');
const fse = require('fs-extra');
const path = require('path');

const { StartFunc: StartFuncFromOpenApp } = require("../openApp");
const { StartFunc: StartFuncFromRouteUse } = require("../RouteUse/entryFile");
const { StartFunc: StartFuncFromAlterFiles } = require('../AlterFiles/entryFile');

const CommonVersion = "V1";

const StartFunc = async ({ inTableName, inColumnsAsArray, inDataPath, inPortNumber, inToPath, inColumnsWithSchema }) => {
    const LocalTableName = inTableName;
    const LocalColumnsAsArray = inColumnsAsArray;
    const LocalDataPath = inDataPath;
    const LocalPortNumber = inPortNumber;

    const LocalToPath = inToPath;

    const LocalFromTablePath = path.join(__dirname, "..", "TableName");

    await fse.copy(LocalFromTablePath, `${LocalToPath}/${CommonVersion}/${LocalTableName}`);

    try {
        StartFuncFromRouteUse({
            inEditorPath: `${LocalToPath}/${CommonVersion}/routes.js`,
            inNewRoute: LocalTableName
        });

        await StartFuncFromAlterFiles({
            inEditorPath: LocalToPath,
            inTableName: LocalTableName,
            inDataPath: LocalDataPath,
            inPortNumber: LocalPortNumber,
            inColumnsAsArray: LocalColumnsAsArray,
            inVersion: CommonVersion,
            inColumnsWithSchema
        });

        vscode.window.showInformationMessage(`BoilerPlate code to: ${LocalToPath}`);

        StartFuncFromOpenApp({ inToPath: LocalToPath });
    } catch (error) {
        vscode.window.showErrorMessage(`Error: ${error.message}`);
    };
};

module.exports = { StartFunc };