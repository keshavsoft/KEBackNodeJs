import fs from "fs";
const CommonDataPath = "{Data}";

const StartFunc = ({ inPostBody, inFileName, inPk }) => {
    const LocalFileName = inFileName;

    const filePath = `${CommonDataPath}/${LocalFileName}.json`;
    let LocalReturnObject = { KTF: false };

    try {
        if (!fs.existsSync(filePath)) {
            LocalReturnObject.KReason = `File ${LocalFileName}.json does not exist in ${CommonDataPath} folder.`;
            console.warn(LocalReturnObject.KReason);
            return LocalReturnObject;
        };

        let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

        let LocalFindIndex = data.findIndex(e => e.pk === Number(inPk));

        if (LocalFindIndex === -1) {
            LocalReturnObject.KReason = `Record with Primary Key '${inPk}' not found.`;
            return LocalReturnObject;
        };

        data[LocalFindIndex] = { ...data[LocalFindIndex], ...inPostBody };

        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

        LocalReturnObject.KTF = true;
        LocalReturnObject.JsonData = `Updated row with pk:'${inPk}'.`;
    } catch (err) {
        LocalReturnObject.KReason = `Error occurred: ${err.message}`;
        console.error("Error:", err);
    };

    return LocalReturnObject;
};

export { StartFunc };