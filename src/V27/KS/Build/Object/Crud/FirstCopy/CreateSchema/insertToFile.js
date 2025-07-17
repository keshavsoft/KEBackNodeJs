const { getJsonFiles } = require("./pullJsonFiles");

const fse = require('fs-extra');

const StartFunc = ({ inToPath }) => {
    const LocalToPath = inToPath;
    const LocalJsonFilesArray = getJsonFiles({ inToPath });

    if (LocalJsonFilesArray.length === 0) {
        fse.writeFileSync(`${LocalToPath}/schema.json`, JSON.stringify({
            TableName: "TabAsObject",
            Columns: [{
                ColumnName: "Col1",
                unique: true,
                type: "STRING"
            },
            {
                ColumnName: "Col2",
                unique: false,
                type: "NUMBER"
            }]
        }));
    } else {
        const LocalTableName = LocalJsonFilesArray[0].replace('.json', '');

        fse.writeFileSync(`${LocalToPath}/schema.json`, JSON.stringify({
            TableName: LocalTableName,
            Columns: [{
                ColumnName: "Col1",
                unique: true,
                type: "STRING"
            },
            {
                ColumnName: "Col2",
                unique: false,
                type: "NUMBER"
            }]
        }));
    };
};

module.exports = { StartFunc };