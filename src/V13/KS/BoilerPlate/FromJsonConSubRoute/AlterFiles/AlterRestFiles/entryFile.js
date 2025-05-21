const { StartFunc: StartFuncFromReadFolder } = require("./readFolder");
const CommonFolderName = "Read";
const CommonInsertFolderName = "Insert";

async function StartFunc({ inEditorPath, inTableName, inPortNumber, inVersion }) {
    const LocalVersion = inVersion;

    await StartFuncFromReadFolder({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/${CommonFolderName}/RestClients`,
        inTableName, inPortNumber
    });

    await StartFuncFromReadFolder({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/${CommonInsertFolderName}/RestClients`,
        inTableName, inPortNumber
    });
};

module.exports = { StartFunc };
