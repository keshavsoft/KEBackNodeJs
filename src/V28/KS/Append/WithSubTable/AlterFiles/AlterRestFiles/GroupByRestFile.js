const fs = require('fs');
const path = require('path');
const vscode = require('vscode');

async function StartFunc({ inFolderPath, inPortNumber }) {
    try {
        const LocalRootPath = LocalFuncGetWorkSpaceFolder();
        const activeFileFolderPath = path.dirname(inFolderPath);
        const LocalRelativePath = activeFileFolderPath.replace(LocalRootPath, "");
        const relativeApiPath = LocalRelativePath.replaceAll(`\\`, "/");

        LocalFuncCreateFolder({ inFolderPath });

        const files = fs.readdirSync(inFolderPath);

        for (const file of files) {
            if (file === "routes.js" || file === "RestClients") {
                continue;
            }

            const fileParts = file.split(".");
            if (fileParts.length < 2) continue;

            const tableName = fileParts[1];
            const filePath = path.join(inFolderPath, "RestClients", `${file.replace(".", "_")}.http`);
            const apiPath = `${relativeApiPath}/GroupBy/${tableName}`;
            const fullUrl = `http://localhost:${inPortNumber}${apiPath}`;
            let LocalLines = [];

            LocalLines.push(`GET ${fullUrl}/{ColumnName}`);

            LocalFuncWriteFile({ inLinesArray: LocalLines, inEditorPath: filePath });
        }
    } catch (err) {
        console.error('Error reading directory:', err);
    }
}

const LocalFuncCreateFolder = ({ inFolderPath }) => {
    const restClientsPath = path.join(inFolderPath, "RestClients");
    if (!fs.existsSync(restClientsPath)) {
        fs.mkdirSync(restClientsPath);
        console.log('Directory created successfully!');
    }
};

const LocalFuncGetWorkSpaceFolder = () => {
    if (vscode.workspace.workspaceFolders) {
        return vscode.workspace.workspaceFolders[0].uri.fsPath;
    } else {
        console.log("No workspace folders found.");
        return "";
    }
};

const LocalFuncWriteFile = ({ inLinesArray, inEditorPath }) => {
    const content = inLinesArray.join('\n');
    fs.writeFileSync(inEditorPath, content, 'utf-8');
};

module.exports = { StartFunc };
