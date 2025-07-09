const { StartFunc: StartFuncFromReadFolder } = require("./readFolder");
const { StartFunc: StartFuncFromInsertRestFile } = require("./insertRestFile");
const { StartFunc: StartFuncFromReadRestFile } = require("./ReadRestFile");
const { StartFunc: StartFuncFromAlterRestFile } = require("./AlterRestFile");
const { StartFunc: StartFuncFromDeleteRestFile } = require("./DeleteRestFile");

const CommonFolderName = "Read";
const CommonDeleteFolderName = "Delete";
const CommonAlterFolderName = "Alter";
const CommonReadSchemaFolderName = "ReadSchema";
const CommonGroupByFolderName = "GroupBy";
const CommonAggregateFunctions = "AggregateFunctions";
const CommonSubTableFunctions = "SubTable";
const CommonValidateFunctions = "Validate";

async function StartFunc({ inEditorPath, inTableName, inPortNumber, inVersion, inColumnsAsArray }) {
    const LocalVersion = inVersion;

    // await StartFuncFromReadFolder({
    //     inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/${CommonFolderName}/RestClients`,
    //     inTableName, inPortNumber
    // });

    await StartFuncFromInsertRestFile({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/Insert`,
        inTableName, inPortNumber,
        inColumnsAsArray
    });

     await StartFuncFromReadRestFile({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/Read`,
        inTableName, inPortNumber,
        inColumnsAsArray
    });

    await StartFuncFromAlterRestFile({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/Alter`,
        inTableName, inPortNumber,
        inColumnsAsArray
    });

    await StartFuncFromDeleteRestFile({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/Delete`,
        inTableName, inPortNumber,
        inColumnsAsArray
    });

    // await StartFuncFromReadFolder({
    //     inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/${CommonDeleteFolderName}/RestClients`,
    //     inTableName, inPortNumber
    // });
    

    // await StartFuncFromReadFolder({
    //     inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/${CommonAlterFolderName}/RestClients`,
    //     inTableName, inPortNumber
    // });

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

     await StartFuncFromInsertRestFile({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/${CommonValidateFunctions}/RestClients`,
        inTableName, inPortNumber,
        inColumnsAsArray
    });

};

module.exports = { StartFunc };
