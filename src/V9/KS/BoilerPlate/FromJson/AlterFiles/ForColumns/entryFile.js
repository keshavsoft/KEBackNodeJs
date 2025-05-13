const { StartFunc: StartFuncFromInControllers } = require("./inControllers");
const { StartFunc: StartFuncFromInRepos } = require("./inRepos");
const { StartFunc: StartFuncFromInDals } = require("./inDals");
const { StartFunc: StartFuncFromInKF } = require("./inKF");

async function StartFunc({ inEditorPath, inTableName, inColumnsAsArray }) {
    StartFuncFromInControllers({ inEditorPath, inTableName, inColumnsAsArray });
    StartFuncFromInRepos({ inEditorPath, inTableName, inColumnsAsArray });
    StartFuncFromInDals({ inEditorPath, inTableName, inColumnsAsArray });
    StartFuncFromInKF({ inEditorPath, inTableName, inColumnsAsArray });
};

module.exports = { StartFunc };
