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
        LocalReturnData.JsonData = `${LocalFileName} file was Created in ${CommonDataPath} folder`;
    } catch (err) {
        if (err.code === 'EEXIST') {
            console.log(`${LocalFileName} file already exists.`);
            LocalReturnData.KReason = `${LocalFileName} file already exists.`;
            return LocalReturnData;

        } else {
            console.error(`Error creating ${LocalFileName} file: , ${err}`);
            LocalReturnData.KReason =`Error creating ${LocalFileName} file: , ${err}`;
            return LocalReturnData;
        };
    };

    return LocalReturnData;
};

export { StartFunc };
