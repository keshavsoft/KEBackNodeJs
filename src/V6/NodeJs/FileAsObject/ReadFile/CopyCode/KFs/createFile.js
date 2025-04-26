import fs from "fs";
import { StartFunc as StartFuncCommonExpose } from "../../../CommonExpose/returnRootDir.js";
const CommonDataPath = "Data";

let StartFunc = ({ inFileName }) => {
    const LocalFileName = inFileName;
    const LocalDataPath = StartFuncCommonExpose();

    let LocalReturnData = { KTF: false };
    const data = fs.readFileSync(`${LocalDataPath}/${CommonDataPath}/${LocalFileName}.json`, 'utf8');

    try {
        LocalReturnData.KTF = true;
        LocalReturnData.JsonData = data;
    } catch (err) {
        if (err.code === 'EEXIST') {
            console.log('File already exists.');
        } else {
            console.error('Error creating file:', err);
        }
    };

    // fs.writeFileSync(`${LocalDataPath}/${LocalFileName}`, JSON.stringify({}));

    return LocalReturnData;
};

export { StartFunc };
