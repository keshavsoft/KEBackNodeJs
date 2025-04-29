import fs from "fs";
import { StartFunc as StartFuncCommonExpose } from "../../../CommonExpose/returnFullDataPath.js";

let StartFunc = ({ inFileName }) => {
    const LocalFileName = inFileName;
    const LocalDataPath = StartFuncCommonExpose();

    let LocalReturnData = { KTF: false };
    const filePath = `${LocalDataPath}/${LocalFileName}.json`;

    if (fs.existsSync(filePath)) {
        try {
            fs.unlinkSync(filePath);
            LocalReturnData.KTF = true;
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
