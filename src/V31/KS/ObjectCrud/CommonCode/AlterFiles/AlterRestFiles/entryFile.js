const { StartFunc: StartFuncFromInsertRestFile } = require("./insertRestFile");
const { StartFunc: StartFuncFromReadRestFile } = require("./ReadRestFile");
const { StartFunc: StartFuncFromAlterRestFile } = require("./AlterRestFile");
const { StartFunc: StartFuncFromDeleteRestFile } = require("./DeleteRestFile");

async function StartFunc({ inEditorPath, inTableName, inPortNumber, inVersion, inColumnsAsArray }) {
    const LocalVersion = inVersion;

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

};

module.exports = { StartFunc };
