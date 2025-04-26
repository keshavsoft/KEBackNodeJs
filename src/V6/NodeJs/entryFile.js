const { StartFunc: StartFuncEndPoints } = require("./EndPoints/entryFile");
const { StartFunc: StartFuncFromTask } = require("./Task/entryFile");
const { StartFunc: StartFuncFromSubRoute } = require("./SubRoute/entryFile");
const { StartFunc: StartFuncFromFileAsObject } = require("./FileAsObject/entryFile");

const StartFunc = () => {
    StartFuncEndPoints();
    StartFuncFromTask();
    StartFuncFromSubRoute();
    StartFuncFromFileAsObject();
};

module.exports = { StartFunc };
