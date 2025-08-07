const path = require('path');
const { StartFunc: StartFuncFromTableCreates } = require('./TableCreate');
const { StartFunc: StartFuncFromGetJsonFiles } = require('./getJsonFiles');

const fs = require("fs");

const StartFunc = async ({ inDataPath, inPortNumber, inToPath, inVersion }) => {
    const localVersion = inVersion;
    const LocalToPath = inToPath;

    const LocalFirstJsonFile = StartFuncFromGetJsonFiles({ inToPath });
    const LocalJsonContent = LocalFuncReadTableSchema({ inRootPath: LocalFirstJsonFile })
    const tableName = path.basename(LocalFirstJsonFile, '.json');

    const fromTablePath = LocalFirstJsonFile;
    const toTablePath = path.join(LocalToPath, localVersion, tableName);

    const LocalColumnsAsArray = Object.keys(LocalJsonContent[0]);

    const LocalData = LocalJsonContent;
    const LocalColumnsWithSchema = {};

    await StartFuncFromTableCreates({
        inFromTablePath: fromTablePath, inToTablePath: toTablePath,
        inTableName: tableName,
        inColumnsAsArray: LocalColumnsAsArray,
        inDataPath,
        inPortNumber, inToPath: LocalToPath,
        inColumnsWithSchema: LocalColumnsWithSchema,
        inData: LocalData, inVersion: localVersion
    });
};

function LocalFuncReadTableSchema({ inRootPath }) {
    try {
        const fileContents = fs.readFileSync(inRootPath, 'utf-8');

        return JSON.parse(fileContents);
    } catch (error) {
        console.error('Error reading .env file:', error);
        return null;
    }
};

module.exports = { StartFunc };
