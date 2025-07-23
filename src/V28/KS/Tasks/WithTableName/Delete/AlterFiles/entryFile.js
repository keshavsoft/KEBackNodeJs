const { StartFunc: StartFuncFromAlterKFFile } = require("./KFFile/entryFile");
const { StartFunc: StartFuncFromAlterRestFile } = require("./alterRestFile");

const StartFunc = async ({ inEditorPath, inNewRoute, inTableName }) => {
    await StartFuncFromAlterKFFile({ inEditorPath, inNewRoute, inTableName });
    await StartFuncFromAlterRestFile({ inEditorPath, inNewRoute });
};

module.exports = { StartFunc };
