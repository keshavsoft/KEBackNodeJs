const { getJsonFiles } = require("./pullJsonFiles");

const fse = require("fs-extra");

const StartFunc = ({ inToPath }) => {
    const LocalToPath = inToPath;

    const LocalJsonFilesArray = getJsonFiles({ inToPath });

    const LocalTableName = LocalJsonFilesArray.length > 0
        ? LocalJsonFilesArray[0].replace('.json', '')
        : "SampleTable";

    fse.writeFileSync(
        `${LocalToPath}/schema.json`,
        JSON.stringify({
            // TableName: LocalTableName,
            Tables: ["Sample2", "Sample3"]
            // ,
            // Columns: [
            //     {
            //         field: "Col1",
            //         unique: true,
            //         type: "STRING",
            //     },
            //     {
            //         field: "Col2",
            //         unique: false,
            //         type: "NUMBER",
            //     },
            // ],
        })
    );

    fse.writeFileSync(
        `${LocalToPath}/Sample2.json`,
        JSON.stringify({
            columns: [
                {
                    field: "Col21",
                    unique: true,
                    type: "STRING",
                },
                {
                    field: "Col22",
                    unique: false,
                    type: "NUMBER",
                },
            ],
            data: []
        })
    );

    fse.writeFileSync(
        `${LocalToPath}/Sample3.json`,
        JSON.stringify({
            columns: [
                {
                    field: "Col31",
                    unique: true,
                    type: "STRING",
                },
                {
                    field: "Col32",
                    unique: false,
                    type: "NUMBER",
                },
            ],
            data: []
        })
    );
};

module.exports = { StartFunc };