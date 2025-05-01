import fs from "fs";
import { StartFunc as StartFuncCommonExpose } from "../../../CommonExpose/returnRootDir.js";
const CommonDataPath = "Data";

let StartFunc = ({ inFileName, inInsertData }) => {
    const LocalFileName = inFileName;
    let LocalInsertData = inInsertData;
    let LocalReturnData = { KTF: false };
    const LocalDataPath = StartFuncCommonExpose();
    const LocalFilePath = `${LocalDataPath}/${CommonDataPath}/${LocalFileName}.json`;

    try {
        fs.writeFileSync(LocalFilePath, JSON.stringify(LocalInsertData), { flag: 'wx' });

        LocalReturnData.KTF = true;
        return LocalReturnData;
    } catch (err) {
        if (err.code === 'EEXIST') {
            console.log('File already exists.');
            LocalReturnData.KReason = "File already exists.";
            return LocalReturnData;

        } else {
            console.error('Error creating file:', err);
            LocalReturnData.KReason = err;
            return LocalReturnData;
        };
    };

    return LocalReturnData;
};

export { StartFunc };
