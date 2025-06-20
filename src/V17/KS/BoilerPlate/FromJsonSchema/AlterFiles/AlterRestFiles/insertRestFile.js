const fs = require('fs');
const path = require('path');
const readline = require('readline');
const vscode = require('vscode');

const CommonStartIndex = 4;

async function StartFunc({ inFolderPath, inPortNumber, inColumnsAsArray }) {
    try {
        const LocalRootPath = LocalFuncGetWorkSpaceFolder();
        const activeFileFolderPath = path.dirname(inFolderPath);
        const LocalRelativePath = activeFileFolderPath.replace(LocalRootPath, "");

        const files = await fs.readdirSync(inFolderPath);

        for (const file of files) {
            const filePath = path.join(inFolderPath, file);
            const stats = await fs.lstatSync(filePath);

            if (stats.isFile()) {
                let LocalLines = await processLineByLine({ inFileName: filePath });

                // Replace placeholders
                LocalLines[0] = LocalLines[0].replace("{PORT}", inPortNumber);
                LocalLines[0] = LocalLines[0].replace("{SubRoute}", LocalRelativePath.replaceAll(`\\`, "/"));

                const FilteredColumns = inColumnsAsArray.filter(col => col !== "Col1" && col !== "Col2");

                if (FilteredColumns.length > 0) {
                    FilteredColumns.forEach((element, LoopIndex) => {
                        const line = element === "SubTable" ? `\t"${element}" : []` : `\t"${element}" : ""`;
                        const isLast = LoopIndex === FilteredColumns.length - 1;
                        const lineWithComma = isLast ? line : `${line},`;

                        LocalLines.splice(CommonStartIndex, 0, lineWithComma);
                    });
                }

                LocalFuncWriteFile({ inLinesArray: LocalLines, inEditorPath: filePath });
            }
        }
    } catch (err) {
        console.error('Error reading directory:', err);
    }
}

const LocalFuncGetWorkSpaceFolder = () => {
    if (vscode.workspace.workspaceFolders) {
        const rootUri = vscode.workspace.workspaceFolders[0].uri;
        const rootPath = rootUri.fsPath;
        return rootPath;
    } else {
        console.log("No workspace folders found.");
        return "";
    }
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
