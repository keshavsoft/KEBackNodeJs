const { StartFunc: StartFuncFromReadParams } = require("./readParams");
const { StartFunc: StartFuncFromAlterRestFiles } = require("./alterRestFiles");
const { StartFunc: StartFuncFromCreateDataFile } = require("./createDataFile");
const { StartFunc: StartFuncFromForColumns } = require("./ForColumns/entryFile");

const StartFunc = async ({ inEditorPath, inTableName, inDataPath, inPortNumber, inColumnsAsArray, inVersion }) => {
    const LocalVersion = inVersion;

    StartFuncFromReadParams({ inEditorPath, inTableName, inDataPath, inVersion });

    await StartFuncFromAlterRestFiles({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/RestClients`,
        inTableName, inPortNumber
    });

    StartFuncFromCreateDataFile({ inTableName });
    StartFuncFromForColumns({ inEditorPath, inTableName, inColumnsAsArray, inPortNumber, inVersion });
};

module.exports = { StartFunc };
