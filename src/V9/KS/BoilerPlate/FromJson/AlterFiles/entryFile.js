const { StartFunc: StartFuncFromReadParams } = require("./readParams");
const { StartFunc: StartFuncFromAlterRestFiles } = require("./alterRestFiles");
const { StartFunc: StartFuncFromCreateDataFile } = require("./createDataFile");

const StartFunc = async ({ inEditorPath, inTableName, inDataPath, inPortNumber }) => {
    StartFuncFromReadParams({ inEditorPath, inTableName, inDataPath });

    await StartFuncFromAlterRestFiles({
        inFolderPath: `${inEditorPath}/V1/${inTableName}/RestClients`,
        inTableName, inPortNumber
    });

    StartFuncFromCreateDataFile({ inTableName })
};

module.exports = { StartFunc };
