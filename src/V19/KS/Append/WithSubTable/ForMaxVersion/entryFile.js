const path = require('path');
const { StartFunc: StartFuncFromTableCreates } = require('./TableCreate');

const StartFunc = async ({ inColumnsAsArray, inDataPath, inPortNumber, inToPath,
    inColumnsWithSchema, inData, inVersion, inTablesArray }) => {

    const localVersion = inVersion;
    const localToPath = inToPath;

    for (const tableName of inTablesArray) {
        const fromTablePath = path.join(__dirname, '..', tableName);
        const toTablePath = path.join(localToPath, localVersion, tableName);

        await StartFuncFromTableCreates({
            inFromTablePath: fromTablePath, inToTablePath: toTablePath,
            inTableName: tableName, inColumnsAsArray, inDataPath,
            inPortNumber, inToPath: localToPath, inColumnsWithSchema,
            inData, inVersion: localVersion
        });
    }
};

module.exports = { StartFunc };
