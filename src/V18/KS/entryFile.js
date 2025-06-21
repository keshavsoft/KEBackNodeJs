const { StartFunc: StartFuncFromBoilerPlate } = require("./BoilerPlate/entryFile");
const { StartFunc: StartFuncFromFileAsObject } = require("./FileAsObject/entryFile");
const { StartFunc: StartFuncFromRouteUse } = require("./RouteUse/entryFile");
const { StartFunc: StartFuncFromFileAsArray } = require("./FileAsArray/entryFile");
const { StartFunc: StartFuncFromTasks } = require("./Tasks/entryFile");
const { StartFunc: StartFuncFromApp } = require("./App/entryFile");
const { StartFunc: StartFuncFromBuild } = require("./Build/entryFile");

const StartFunc = () => {
    StartFuncFromBoilerPlate();
    StartFuncFromFileAsObject();
    StartFuncFromRouteUse();
    StartFuncFromFileAsArray();
    StartFuncFromTasks();
    StartFuncFromApp();
    StartFuncFromBuild();
};

module.exports = { StartFunc };