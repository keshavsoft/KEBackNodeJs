import fs from "fs";
import { StartFunc as StartFuncCommonExpose } from "../../../CommonExpose/returnRootDir.js";
const CommonDataPath = "Data";

let StartFunc = ({ inFileName, inInsertData }) => {
    const LocalFileName = inFileName;
    let LocalInsertData = inInsertData;
    let LocalReturnData = { KTF: false };
    const LocalDataPath = StartFuncCommonExpose();

    try {
        fs.writeFileSync(`${LocalDataPath}/${CommonDataPath}/${LocalFileName}.json`, JSON.stringify(LocalInsertData), { flag: 'wx' });

        LocalReturnData.KTF = true;
    } catch (err) {
        if (err.code === 'EEXIST') {
            console.log('File already exists.');
        } else {
            console.error('Error creating file:', err);
        }
    };

    return LocalReturnData;
};

export { StartFunc };
