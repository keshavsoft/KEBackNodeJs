const { StartFunc: StartFuncFromBoilerPlate } = require("./BoilerPlate/entryFile");
const { StartFunc: StartFuncFromFileAsObject } = require("./FileAsObject/entryFile");
const { StartFunc: StartFuncFromRouteUse } = require("./RouteUse/entryFile");
const { StartFunc: StartFuncFromFileAsArray } = require("./FileAsArray/entryFile");
const { StartFunc: StartFuncFromTasks } = require("./Tasks/entryFile");

const StartFunc = () => {
    StartFuncFromBoilerPlate();
    StartFuncFromFileAsObject();
    StartFuncFromRouteUse();
    StartFuncFromFileAsArray();
    StartFuncFromTasks();
};

module.exports = { StartFunc };