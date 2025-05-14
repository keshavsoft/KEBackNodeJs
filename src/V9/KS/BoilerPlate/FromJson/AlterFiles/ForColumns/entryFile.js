const { StartFunc: StartFuncFromInControllers } = require("./inControllers");
const { StartFunc: StartFuncFromInRepos } = require("./inRepos");
const { StartFunc: StartFuncFromInDals } = require("./inDals");
const { StartFunc: StartFuncFromInKF } = require("./inKF");
const { StartFunc: StartFuncFromAlterRestFiles } = require("./alterRestFiles");
const { StartFunc: StartFuncFromMiddlewares } = require("./inMiddlewares");

async function StartFunc({ inEditorPath, inTableName, inColumnsAsArray, inPortNumber }) {
    StartFuncFromInControllers({ inEditorPath, inTableName, inColumnsAsArray });
    StartFuncFromInRepos({ inEditorPath, inTableName, inColumnsAsArray });
    StartFuncFromInDals({ inEditorPath, inTableName, inColumnsAsArray });
    StartFuncFromInKF({ inEditorPath, inTableName, inColumnsAsArray });

    await StartFuncFromAlterRestFiles({
        inFilePath: `${inEditorPath}/V1/${inTableName}/RestClients/insertWithColumns.http`,
        inTableName, inPortNumber, inColumnsAsArray
    });

    StartFuncFromMiddlewares({ inEditorPath, inTableName, inColumnsAsArray });
};

module.exports = { StartFunc };
