const { StartFunc: StartFuncFromInControllers } = require("./inControllers");
const { StartFunc: StartFuncFromInRepos } = require("./inRepos");
const { StartFunc: StartFuncFromInDals } = require("./inDals");
const { StartFunc: StartFuncFromInKF } = require("./inKF");
const { StartFunc: StartFuncFromAlterRestFiles } = require("./alterRestFiles");
const { StartFunc: StartFuncFromMiddlewares } = require("./inMiddlewares");

async function StartFunc({ inEditorPath, inTableName, inColumnsAsArray, inPortNumber, inVersion }) {
    const LocalVersion = inVersion;

    StartFuncFromInControllers({ inEditorPath, inTableName, inColumnsAsArray, inVersion: LocalVersion });
    StartFuncFromInRepos({ inEditorPath, inTableName, inColumnsAsArray, inVersion: LocalVersion });
    StartFuncFromInDals({ inEditorPath, inTableName, inColumnsAsArray, inVersion: LocalVersion });
    StartFuncFromInKF({ inEditorPath, inTableName, inColumnsAsArray, inVersion: LocalVersion });

    await StartFuncFromAlterRestFiles({
        inFilePath: `${inEditorPath}/${LocalVersion}/${inTableName}/RestClients/insertWithColumns.http`,
        inTableName, inPortNumber, inColumnsAsArray
    });

    StartFuncFromMiddlewares({ inEditorPath, inTableName, inColumnsAsArray, inVersion: LocalVersion });
};

module.exports = { StartFunc };
