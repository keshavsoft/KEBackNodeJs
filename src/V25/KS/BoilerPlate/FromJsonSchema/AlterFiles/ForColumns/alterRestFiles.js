const fs = require('fs');
const path = require('path');
const readline = require('readline');
const vscode = require('vscode');

async function StartFunc({ inFilePath, inPortNumber, inColumnsAsArray }) {
    try {
        const LocalRootPath = LocalFuncGetWorkSpaceFolder();
        const activeFileFolderPath = path.dirname(inFilePath);
        const LocalRelativePath = activeFileFolderPath.replace(LocalRootPath, "");

        let LocalLines = await processLineByLine({ inFileName: inFilePath });
        LocalLines[0] = LocalLines[0].replace("{PORT}", inPortNumber);
        LocalLines[0] = LocalLines[0].replace("{SubRoute}", LocalRelativePath.replaceAll(`\\`, "/"));

        // Filter out Col1 and Col2
        const FilteredColumns = inColumnsAsArray.filter(col => col !== "Col1" && col !== "Col2");

        if (FilteredColumns.length > 0) {
            FilteredColumns.forEach((element, LoopIndex) => {
                const line = element === "SubTable" ? `\t"${element}" : []` : `\t"${element}" : ""`;
                const isLast = LoopIndex === FilteredColumns.length - 1;
                const lineWithComma = isLast ? line : `${line},`;

                LocalLines.splice(4, 0, lineWithComma);
            });
        }

        LocalFuncWriteFile({ inLinesArray: LocalLines, inEditorPath: inFilePath });
    } catch (err) {
        console.error('Error reading file:', err);
    };
};

const LocalFuncGetWorkSpaceFolder = () => {
    if (vscode.workspace.workspaceFolders) {
        const rootUri = vscode.workspace.workspaceFolders[0].uri;
        const rootPath = rootUri.fsPath;
        return rootPath;
    } else {
        console.log("No workspace folders found.");
        return "";
    };
};

const LocalFuncWriteFile = ({ inLinesArray, inEditorPath }) => {
    const content = inLinesArray.join('\n');
    fs.writeFileSync(inEditorPath, content, 'utf-8');
};

const processLineByLine = async ({ inFileName }) => {
    try {
        const fileStream = fs.createReadStream(inFileName);
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
        }

        return LocalLines;
    } catch (err) {
        console.error(`Error processing file: ${err.message}`);
    }
};

module.exports = { StartFunc };
