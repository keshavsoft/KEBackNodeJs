const { StartFunc: StartFuncFromWithSubTable } = require("./WithSubTable/entryFile");
const { StartFunc: StartFuncFromOnlyBackEnd } = require("./OnlyBackEnd/entryFile");

const StartFunc = () => {
    StartFuncFromWithSubTable();
    StartFuncFromOnlyBackEnd();
};

module.exports = { StartFunc };