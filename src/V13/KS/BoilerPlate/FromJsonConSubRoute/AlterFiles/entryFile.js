const { StartFunc: StartFuncFromReadParams } = require("./readParams");
const { StartFunc: StartFuncFromAlterRestFiles } = require("./AlterRestFiles/entryFile");
const { StartFunc: StartFuncFromCreateDataFile } = require("./createDataFile");
// const { StartFunc: StartFuncFromForColumns } = require("./ForColumns/entryFile");
const { StartFunc: StartFuncFromForInsertWithColumns } = require("./ForInsertWithColumns/entryFile");
const { StartFunc: StartFuncFromForGetColumnsAsArray } = require("./ForGetColumnsAsArray/entryFile");
const { StartFunc: StartFuncFromForInsertColumnExist } = require("./ForInsertColumnExist/entryFile");

const StartFunc = async ({ inEditorPath, inTableName, inDataPath, inPortNumber, inColumnsAsArray, inVersion, inColumnsWithSchema }) => {
    const LocalVersion = inVersion;

    StartFuncFromReadParams({
        inEditorPath, inTableName, inDataPath,
        inVersion: LocalVersion,
        inColumnsAsArray, inColumnsWithSchema
    });

    await StartFuncFromAlterRestFiles({
        inEditorPath, inTableName, inPortNumber, inVersion
    });

    await StartFuncFromCreateDataFile({ inTableName });
    await StartFuncFromForInsertWithColumns({ inEditorPath, inTableName, inColumnsAsArray, inPortNumber, inVersion });
    await StartFuncFromForGetColumnsAsArray({ inEditorPath, inTableName, inPortNumber, inVersion });
    await StartFuncFromForInsertColumnExist({ inEditorPath, inTableName, inColumnsAsArray, inPortNumber, inVersion });

};

module.exports = { StartFunc };
