const vscode = require('vscode');
const fse = require('fs-extra');
const readline = require('readline');

const { StartFunc: StartFuncFromReadEnvFile } = require("./readEnvFile");

const StartFunc = async ({ inEditorPath, inNewRoute }) => {
    try {
        const LocalEditorPath = inEditorPath;

        const LocalEndPointNeeded = inNewRoute;
        const activeFileFolderPath = require('path').dirname(LocalEditorPath);
        const LocalFilePath = `${activeFileFolderPath}/${LocalEndPointNeeded}/KFs/createFile.js`;
        const LocalRootPath = LocalFuncGetWorkSpaceFolder();
        const LocalRelativePath = activeFileFolderPath.replace(LocalRootPath, "");

        const LocalEnvFileData = StartFuncFromReadEnvFile({ inRootPath: LocalRootPath });

        let LocalLines = await processLineByLine({ inFileName: LocalFilePath });
        LocalLines[1] = LocalLines[1].replace("{Data}", LocalEnvFileData.DataPath);

        LocalFuncWriteFile({ inLinesArray: LocalLines, inEditorPath: LocalFilePath });
    } catch (error) {
        vscode.window.showErrorMessage(`Error: ${error.message}`);
    };
};

const LocalFuncGetWorkSpaceFolder = () => {
    if (vscode.workspace.workspaceFolders) {
        const rootUri = vscode.workspace.workspaceFolders[0].uri;
        const rootPath = rootUri.fsPath; // Get the file path
        return rootPath;
    } else {
        console.log("No workspace folders found.");
    };
};

const LocalFuncWriteFile = ({ inLinesArray, inEditorPath }) => {
    let LocalLines = inLinesArray;

    const content = LocalLines.join('\n');

    fse.writeFileSync(inEditorPath, content, 'utf-8');
};

const processLineByLine = async ({ inFileName }) => {
    try {
        const fileStream = fse.createReadStream(inFileName);
        let LocalLines = [];

        fileStream.on('error', (err) => {
            console.error(`Error reading file: ${err.message}`);
        });

        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });

        for await (const line of rl) {
            LocalLines.push(line);
        };

        return LocalLines;
    } catch (err) {
        console.error(`Error processing file: ${err.message}`);
    }
};

module.exports = { StartFunc };
