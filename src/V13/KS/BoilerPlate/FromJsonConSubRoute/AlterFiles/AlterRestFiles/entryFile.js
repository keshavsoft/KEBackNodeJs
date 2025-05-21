const { StartFunc: StartFuncFromReadFolder } = require("./readFolder");
const CommonFolderName = "Read";
const CommonInsertFolderName = "Insert";
const CommonDeleteFolderName = "Delete";

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

     await StartFuncFromReadFolder({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/${CommonDeleteFolderName}/RestClients`,
        inTableName, inPortNumber
    });
};

module.exports = { StartFunc };
