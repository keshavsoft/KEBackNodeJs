const { StartFunc: StartFuncFromShowGet } = require("./ShowGet/entryFile");
const { StartFunc: StartFuncFromAlterPut } = require("./AlterPut/entryFile");
const { StartFunc: StartFuncFromAggrFuncsGet } = require("./AggrFuncsGet/entryFile");
const { StartFunc: StartFuncFromSelectedColumns } = require("./SelectedColumns/entryFile");
const { StartFunc: StartFuncFromBulkPost } = require("./BulkPost/entryFile");
const { StartFunc: StartFuncFromUpload } = require("./Upload/entryFile");
const { StartFunc: StartFuncFromRowShow } = require("./RowShow/entryFile");
const { StartFunc: StartFuncFromCreatePost } = require("./CreatePost/entryFile");
const { StartFunc: StartFuncFromCheck } = require("./Check/entryFile");
const { StartFunc: StartFuncFromGenerateToken } = require("./GenerateToken/entryFile");
const { StartFunc: StartFuncFromFileAsObject } = require("./FileAsObject/entryFile");
const { StartFunc: StartFuncFromFileAsObjTasks } = require("./FileAsObjTasks/entryFile");

const StartFunc = () => {
    StartFuncFromShowGet();
    StartFuncFromAlterPut();
    StartFuncFromAggrFuncsGet();
    StartFuncFromSelectedColumns();
    StartFuncFromBulkPost();
    StartFuncFromUpload();
    StartFuncFromRowShow();
    StartFuncFromCreatePost();
    StartFuncFromCheck();
    StartFuncFromGenerateToken();
    StartFuncFromFileAsObject();
    StartFuncFromFileAsObjTasks();
};

module.exports = { StartFunc };