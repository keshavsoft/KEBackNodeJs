const { StartFunc: StartFuncFromReadParams } = require("./readParams");
const { StartFunc: StartFuncFromAlterRestFiles } = require("./alterRestFiles");
const { StartFunc: StartFuncFromCreateDataFile } = require("./createDataFile");
// const { StartFunc: StartFuncFromForColumns } = require("./ForColumns/entryFile");
const { StartFunc: StartFuncFromForInsertWithColumns } = require("./ForInsertWithColumns/entryFile");
const { StartFunc: StartFuncFromForGetColumnsAsArray } = require("./ForGetColumnsAsArray/entryFile");

const StartFunc = async ({ inEditorPath, inTableName, inDataPath, inPortNumber, inColumnsAsArray, inVersion, inColumnsWithSchema }) => {
    const LocalVersion = inVersion;

    StartFuncFromReadParams({ inEditorPath, inTableName, inDataPath, inVersion, inColumnsAsArray, inColumnsWithSchema });

    await StartFuncFromAlterRestFiles({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/RestClients`,
        inTableName, inPortNumber
    });

    await StartFuncFromCreateDataFile({ inTableName });
    await StartFuncFromForInsertWithColumns({ inEditorPath, inTableName, inColumnsAsArray, inPortNumber, inVersion });
    await StartFuncFromForGetColumnsAsArray({ inEditorPath, inTableName, inPortNumber, inVersion });
};

module.exports = { StartFunc };
