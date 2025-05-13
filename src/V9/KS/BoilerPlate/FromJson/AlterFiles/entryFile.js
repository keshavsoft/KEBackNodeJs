const { StartFunc: StartFuncFromReadParams } = require("./readParams");
const { StartFunc: StartFuncFromAlterRestFiles } = require("./alterRestFiles");
const { StartFunc: StartFuncFromCreateDataFile } = require("./createDataFile");
const { StartFunc: StartFuncFromForColumns } = require("./ForColumns/entryFile");

const StartFunc = async ({ inEditorPath, inTableName, inDataPath, inPortNumber, inColumnsAsArray }) => {
    StartFuncFromReadParams({ inEditorPath, inTableName, inDataPath });

    await StartFuncFromAlterRestFiles({
        inFolderPath: `${inEditorPath}/V1/${inTableName}/RestClients`,
        inTableName, inPortNumber
    });

    StartFuncFromCreateDataFile({ inTableName });
    StartFuncFromForColumns({ inEditorPath, inTableName, inColumnsAsArray });
};

module.exports = { StartFunc };
