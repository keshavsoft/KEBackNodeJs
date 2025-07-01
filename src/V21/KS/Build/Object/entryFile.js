const { StartFunc: StartFuncFromCrud } = require("./Crud/entryFile");

const StartFunc = () => {
    StartFuncFromCrud();
};

module.exports = { StartFunc };