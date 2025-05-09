const { StartFunc: StartFuncFromAlterKFFile } = require("./KFFile/entryFile");
const { StartFunc: StartFuncFromAlterRestFile } = require("./alterRestFile");

const StartFunc = async ({ inEditorPath, inNewRoute }) => {
    await StartFuncFromAlterKFFile({ inEditorPath, inNewRoute });
    await StartFuncFromAlterRestFile({ inEditorPath, inNewRoute });
};

module.exports = { StartFunc };
