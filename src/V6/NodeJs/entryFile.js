const { StartFunc: StartFuncEndPoints } = require("./EndPoints/entryFile");
const { StartFunc: StartFuncFromTask } = require("./Task/entryFile");
const { StartFunc: StartFuncFromFileAsObject } = require("./FileAsObject/entryFile");
const { StartFunc: StartFuncFromFileAsObjectContent } = require("./FileAsObjectContent/entryFile");
const { StartFunc: StartFuncFromRouteUse } = require("./RouteUse/entryFile");

const StartFunc = () => {
    StartFuncEndPoints();
    StartFuncFromTask();
    StartFuncFromFileAsObject();
    StartFuncFromFileAsObjectContent();
    StartFuncFromRouteUse();
};

module.exports = { StartFunc };
