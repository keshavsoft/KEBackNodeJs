const { StartFunc: StartFuncFromWithContent } = require("./WithContent/entryFile");

const StartFunc = () => {
    StartFuncFromWithContent();
};

module.exports = { StartFunc };