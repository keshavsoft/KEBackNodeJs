const vscode = require('vscode');
const fse = require('fs-extra');
const path = require('path');

const { getSelectedFolderPath } = require('./getSelectedFolderPath');
const { StartFunc: StartFuncFromRouteUse } = require('./RouteUse/entryFile');
const { StartFunc: StartFuncFromAlterFiles } = require('./AlterFiles/entryFile');

const CommonRegisterCommand = "KS.Tasks.WithTableName.RowDataWithPk";

const StartFunc = () => {
    vscode.commands.registerCommand(CommonRegisterCommand, LocalFuncToActivate);
};

const LocalFuncToActivate = async () => {
    try {
        const selectedFolder = await getSelectedFolderPath();

        if (!selectedFolder) throw new Error('No folder selected, and no active file found in the workspace.');

        const LocalActiveEditorPath = await LocalFuncGetOpenEditorPath();

        if (!LocalActiveEditorPath) throw new Error('No Active Editor.');

        const LocalFromInput = await LocalFuncTakeInputFromUser();
        const LocalEndPointNeeded = LocalFromInput.EndPointNeeded;
        const LocalTableName = LocalFromInput.TableName;

        const LocalFromPath = path.join(__dirname, "copyCode");
        const LocalToPath = path.join(selectedFolder, LocalEndPointNeeded);

        await fse.copy(LocalFromPath, LocalToPath);

        StartFuncFromRouteUse({
            inEditorPath: LocalActiveEditorPath,
            inNewRoute: LocalEndPointNeeded
        });

        StartFuncFromAlterFiles({
            inEditorPath: LocalActiveEditorPath,
            inNewRoute: LocalEndPointNeeded,
            inTableName: LocalTableName
        });

        vscode.window.showInformationMessage(`Folder created and contents copied to: ${LocalToPath}`);
    } catch (error) {
        vscode.window.showErrorMessage(`Error: ${error.message}`);
    };
};

const LocalFuncTakeInputFromUser = async () => {
    const LocalEndPointNeeded = await vscode.window.showInputBox({ prompt: 'TableName:TaskName' });
    const LocalArray = LocalEndPointNeeded.split(":");

    if (!LocalEndPointNeeded) throw new Error('Task Name was not provided.');

    return {
        TableName: LocalArray[0],
        EndPointNeeded: LocalArray[1]
    };
};

const LocalFuncGetOpenEditorPath = async () => {
    // If no folder is selected, fall back to the active file's folder
    const activeEditor = vscode.window.activeTextEditor;

    if (activeEditor) {
        const activeFilePath = activeEditor.document.uri.fsPath;

        if (await fse.pathExists(activeFilePath)) {
            return activeFilePath;
        };
    };

    // If no folder or active file is found, return null
    return null;
};

module.exports = { StartFunc };
