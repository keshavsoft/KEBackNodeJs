const { StartFunc: StartFuncFromInControllers } = require("./inControllers");
const { StartFunc: StartFuncFromInRepos } = require("./inRepos");
const { StartFunc: StartFuncFromInDals } = require("./inDals");

async function StartFunc({ inEditorPath, inTableName, inColumnsAsArray }) {
    StartFuncFromInControllers({ inEditorPath, inTableName, inColumnsAsArray });
    StartFuncFromInRepos({ inEditorPath, inTableName, inColumnsAsArray });
    StartFuncFromInDals({ inEditorPath, inTableName, inColumnsAsArray });
};

module.exports = { StartFunc };
