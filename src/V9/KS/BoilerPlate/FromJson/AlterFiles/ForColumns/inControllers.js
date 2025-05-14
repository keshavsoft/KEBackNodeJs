const fs = require('fs');
const readline = require('readline');
const CommonRouterSearch = "let LocalFromRepo = ";

async function StartFunc({ inEditorPath, inTableName, inColumnsAsArray }) {
    const LocalVersion = inVersion;

    const LocaFileName = `${inEditorPath}/${LocalVersion}/${inTableName}/InsertWithColumns/Controllers/entryFile.js`;

    const LocalForInput = inColumnsAsArray.map(element => `LocalCoumn${element}`);

    const LocalColumnsToString = LocalForInput.join(",");

    let LocalLines = await processLineByLine({ inFileName: LocaFileName });

    inColumnsAsArray.forEach(element => {
        LocalLines.splice(6, 0, `\tlet LocalCoumn${element} = LocalRequestBody.${element};`);
    });

    let LocalFindIndex = LocalLines.findIndex((element) => element.includes(CommonRouterSearch));

    if (LocalFindIndex >= 0) {
        LocalLines[LocalFindIndex] = LocalLines[LocalFindIndex].replace("{}", `{${LocalColumnsToString}}`);
    };

    LocalFuncWriteFile({ inLinesArray: LocalLines, inEditorPath: LocaFileName });
};

const LocalFuncWriteFile = ({ inLinesArray, inEditorPath }) => {
    let LocalLines = inLinesArray;

    const content = LocalLines.join('\n');

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
        };

        return LocalLines;
    } catch (err) {
        console.error(`Error processing file: ${err.message}`);
    }
};

module.exports = { StartFunc };
