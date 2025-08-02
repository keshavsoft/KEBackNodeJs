const fs = require('fs');
const vscode = require('vscode');

async function StartFunc({ inTableName, inData }) {
    try {
        const LocalTableName = inTableName;
        const LocalRootPath = LocalFuncGetWorkSpaceFolder();

        if (!LocalRootPath) {
            console.log("Workspace root path not found.");
            return;
        }

        const filePath = `${LocalRootPath}/Data/${LocalTableName}.json`;

        if (fs.existsSync(filePath)) {
            console.log(`File "${LocalTableName}.json" already exists. Skipping write.`);
            return;
        }

        fs.writeFileSync(filePath, JSON.stringify(inData, null, 2), 'utf-8');
        console.log(`Data written to "${LocalTableName}.json"`);

    } catch (err) {
        console.error('Error in StartFunc:', err);
    }
}

const LocalFuncGetWorkSpaceFolder = () => {
    if (vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0) {
        const rootUri = vscode.workspace.workspaceFolders[0].uri;
        return rootUri.fsPath;
    } else {
        console.log("No workspace folders found.");
        return null;
    }
};

module.exports = { StartFunc };
