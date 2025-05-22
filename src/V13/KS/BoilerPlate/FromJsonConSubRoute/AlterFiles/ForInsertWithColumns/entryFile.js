const { StartFunc: StartFuncFromForInsert } = require("./ForInsert/entryFile");
const { StartFunc: StartFuncFromForRead } = require("./ForRead/entryFile");

async function StartFunc({ inEditorPath, inTableName, inColumnsAsArray, inPortNumber, inVersion }) {
    const LocalVersion = inVersion;

    await StartFuncFromForInsert({
        inEditorPath, inTableName, inColumnsAsArray, inPortNumber,
        inVersion: LocalVersion
    });

    await StartFuncFromForRead({
        inEditorPath, inTableName, inColumnsAsArray, inPortNumber,
        inVersion: LocalVersion
    });
};

module.exports = { StartFunc };
