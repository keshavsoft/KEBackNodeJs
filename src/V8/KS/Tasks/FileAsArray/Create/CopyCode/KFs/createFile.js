import fs from "fs";
import { StartFunc as StartFuncCommonExpose } from "../../../CommonExpose/returnRootDir.js";
const CommonDataPath = "Data";

let StartFunc = ({ inFileName }) => {
    const LocalFileName = inFileName;
    const LocalDataPath = StartFuncCommonExpose();

    let LocalReturnData = { KTF: false };

    try {
        fs.writeFileSync(`${LocalDataPath}/${CommonDataPath}/${LocalFileName}.json`, JSON.stringify([]), { flag: 'wx' });

        LocalReturnData.KTF = true;
        LocalReturnData.SuccessText = `${LocalFileName}.json file was created in ${CommonDataPath} folder as an Array...`; 
    } catch (err) {
        if (err.code === 'EEXIST') {
            console.log(`${LocalFileName}.json file already exists.`); 
            LocalReturnData.KReason = `${LocalFileName}.json file already exists.`; 
            return LocalReturnData;
        } else {
            console.error(`Error creating ${LocalFileName}.json file: , ${err}`); 
            LocalReturnData.KReason = `Error creating ${LocalFileName}.json file: , ${err}`;
            return LocalReturnData;
        };
    };

    return LocalReturnData;
};

export { StartFunc };
