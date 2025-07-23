import fs from "fs";
const CommonDataPath = "{Data}";

let StartFunc = ({ inFileName }) => {
    const LocalFileName = inFileName;

    let LocalReturnData = { KTF: false };
    const filePath = `${CommonDataPath}/${LocalFileName}.json`;

    if (fs.existsSync(filePath)) {
        try {
            fs.unlinkSync(filePath);
            LocalReturnData.KTF = true;
            LocalReturnData.JsonData = `${LocalFileName}.json has been successfully deleted.`;

            console.log(`${LocalFileName}.json has been successfully deleted.`);
        } catch (err) {
            LocalReturnData.KReason = err.message;
            console.error(`Error deleting ${LocalFileName}.json:`, err.message);
        };
    } else {
        LocalReturnData.KReason = `File ${LocalFileName}.json does not exist.`

        console.warn(LocalReturnData.KReason);
    };

    return LocalReturnData;
};

export { StartFunc };
