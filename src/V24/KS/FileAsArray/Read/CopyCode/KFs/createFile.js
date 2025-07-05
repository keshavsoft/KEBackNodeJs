import fs from "fs";
import { StartFunc as StartFuncCommonExpose } from "../../../CommonExpose/returnRootDir.js";
const CommonDataPath = "Data";

let StartFunc = ({ inFileName }) => {
    const LocalFileName = inFileName;
    const LocalDataPath = StartFuncCommonExpose();

    let LocalReturnData = { KTF: false };
    const filePath = `${LocalDataPath}/${CommonDataPath}/${LocalFileName}.json`;
    
    if (fs.existsSync(filePath)) {
        try {
            const data = fs.readFileSync(`${filePath}`, 'utf8');

            LocalReturnData.KTF = true;
            LocalReturnData.JsonData = data;
        } catch (err) {
            console.warn(`Error reading ${LocalFileName} file: ${err}`);
            LocalReturnData.KReason = `Error reading ${LocalFileName} file: ${err}`;
        };
    } else {
        LocalReturnData.KReason = `${LocalFileName}.json file doesnt exist.`

        console.warn(LocalReturnData.KReason);
    };

    return LocalReturnData;
};

export { StartFunc };
