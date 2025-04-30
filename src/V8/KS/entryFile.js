const { StartFunc: StartFuncFromBoilerPlate } = require("./BoilerPlate/entryFile");
const { StartFunc: StartFuncFromFileAsObject } = require("./FileAsObject/entryFile");
const { StartFunc: StartFuncFromRouteUse } = require("./RouteUse/entryFile");

const StartFunc = () => {
    StartFuncFromBoilerPlate();
    StartFuncFromFileAsObject();
    StartFuncFromRouteUse();
};

module.exports = { StartFunc };
