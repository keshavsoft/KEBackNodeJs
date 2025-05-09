const { StartFunc: StartFuncNodeJs } = require("./NodeJs/entryFile");
const { StartFunc: StartFuncFromKS } = require("./KS/entryFile");

const StartFunc = () => {
    StartFuncNodeJs();
    StartFuncFromKS();
};

module.exports = { StartFunc };