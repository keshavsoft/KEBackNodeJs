const { StartFunc: StartFuncFromReadFolder } = require("./readFolder");
const { StartFunc: StartFuncFromInsertRestFile } = require("./insertRestFile");

const CommonFolderName = "Read";
const CommonDeleteFolderName = "Delete";
const CommonAlterFolderName = "Alter";
const CommonReadSchemaFolderName = "ReadSchema";
const CommonGroupByFolderName = "GroupBy";
const CommonAggregateFunctions = "AggregateFunctions";
const CommonSubTableFunctions = "SubTable";

async function StartFunc({ inEditorPath, inTableName, inPortNumber, inVersion, inColumnsAsArray }) {
    const LocalVersion = inVersion;

    await StartFuncFromReadFolder({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/${CommonFolderName}/RestClients`,
        inTableName, inPortNumber
    });

    await StartFuncFromInsertRestFile({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/Insert/RestClients`,
        inTableName, inPortNumber,
        inColumnsAsArray
    });

    await StartFuncFromReadFolder({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/${CommonDeleteFolderName}/RestClients`,
        inTableName, inPortNumber
    });

    await StartFuncFromReadFolder({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/${CommonAlterFolderName}/RestClients`,
        inTableName, inPortNumber
    });

    await StartFuncFromReadFolder({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/${CommonReadSchemaFolderName}/RestClients`,
        inTableName, inPortNumber
    });

    await StartFuncFromReadFolder({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/${CommonGroupByFolderName}/RestClients`,
        inTableName, inPortNumber
    });

    await StartFuncFromReadFolder({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/${CommonAggregateFunctions}/RestClients`,
        inTableName, inPortNumber
    });

     await StartFuncFromReadFolder({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/${CommonSubTableFunctions}/Read/RestClients`,
        inTableName, inPortNumber
    });

    await StartFuncFromReadFolder({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/${CommonSubTableFunctions}/Insert/RestClients`,
        inTableName, inPortNumber
    });

     await StartFuncFromReadFolder({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/${CommonSubTableFunctions}/Alter/RestClients`,
        inTableName, inPortNumber
    });

    await StartFuncFromReadFolder({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/${CommonSubTableFunctions}/Delete/RestClients`,
        inTableName, inPortNumber
    });

};

module.exports = { StartFunc };
