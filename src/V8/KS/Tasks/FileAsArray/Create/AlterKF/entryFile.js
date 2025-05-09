const { StartFunc: StartFuncFromAlterKFFile } = require("./alterKFFile");
const { StartFunc: StartFuncFromAlterRestFile } = require("./alterRestFile");

const StartFunc = async ({ inEditorPath, inNewRoute }) => {
    await StartFuncFromAlterKFFile({ inEditorPath, inNewRoute });
    await StartFuncFromAlterRestFile({ inEditorPath, inNewRoute });

    // try {
    //     const LocalEditorPath = inEditorPath;

    //     const LocalEndPointNeeded = inNewRoute;
    //     const activeFileFolderPath = require('path').dirname(LocalEditorPath);
    //     const LocalFilePath = `${activeFileFolderPath}/${LocalEndPointNeeded}/KFs/createFile.js`;
    //     const LocalRootPath = LocalFuncGetWorkSpaceFolder();
    //     const LocalRelativePath = activeFileFolderPath.replace(LocalRootPath, "");

    //     const LocalEnvFileData = StartFuncFromReadEnvFile({ inRootPath: LocalRootPath });

    //     let LocalLines = await processLineByLine({ inFileName: LocalFilePath });
    //     LocalLines[1] = LocalLines[1].replace("{Data}", LocalEnvFileData.DataPath);

    //     LocalFuncWriteFile({ inLinesArray: LocalLines, inEditorPath: LocalFilePath });

    //     vscode.window.showInformationMessage(`Folder created and contents copied to: ${LocalEndPointNeeded}`);
    // } catch (error) {
    //     vscode.window.showErrorMessage(`Error: ${error.message}`);
    // };
};

module.exports = { StartFunc };
