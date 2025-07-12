const fs = require("fs");
const CommonFolderName = "Schemas";

const StartFunc = ({ inToPath }) => {
    const LocalToPath = inToPath;

    try {
        fs.writeFileSync(
            `${LocalToPath}/schema.json`,
            JSON.stringify({
                Tables: ["Sample2", "Sample3"]
            })
        );

        fs.mkdirSync( `${LocalToPath}/${CommonFolderName}`);

        fs.writeFileSync(
            `${LocalToPath}/${CommonFolderName}/Sample2.json`,
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

        fs.writeFileSync(
            `${LocalToPath}/${CommonFolderName}/Sample3.json`,
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

    } catch (err) {
        console.error('Error creating directory:', err.message);
    };
};

module.exports = { StartFunc };