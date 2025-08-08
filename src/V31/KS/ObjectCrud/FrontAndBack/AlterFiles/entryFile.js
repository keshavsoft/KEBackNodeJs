const { StartFunc: StartFuncFromReadParams } = require("./readParams");
const { StartFunc: StartFuncFromAlterRestFiles } = require("./AlterRestFiles/entryFile");
const { StartFunc: StartFuncFromCreateDataFile } = require("./createDataFile");

const StartFunc = async ({ inEditorPath, inTableName, inDataPath, inPortNumber, inColumnsAsArray, inVersion, inColumnsWithSchema, inData }) => {
    const LocalVersion = inVersion;

    StartFuncFromReadParams({
        inEditorPath, inTableName, inDataPath,
        inVersion: LocalVersion,
        inColumnsAsArray, inColumnsWithSchema
    });

    await StartFuncFromAlterRestFiles({
        inEditorPath, inTableName, inPortNumber, inVersion,
        inColumnsAsArray
    });

    await StartFuncFromCreateDataFile({ inTableName, inData });
};

module.exports = { StartFunc };
