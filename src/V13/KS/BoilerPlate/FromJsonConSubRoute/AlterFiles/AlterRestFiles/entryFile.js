const { StartFunc: StartFuncFromReadFolder } = require("./readFolder");
const CommonFolderName = "Read";

async function StartFunc({ inEditorPath, inTableName, inPortNumber, inVersion }) {
    const LocalVersion = inVersion;

    await StartFuncFromReadFolder({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/${CommonFolderName}/RestClients`,
        inTableName, inPortNumber
    });
};

module.exports = { StartFunc };
