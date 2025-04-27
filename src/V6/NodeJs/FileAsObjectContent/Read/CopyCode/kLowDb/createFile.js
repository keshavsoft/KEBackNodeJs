import fs from "fs";
import { StartFunc as StartFuncCommonExpose } from "../../../CommonExpose/returnRootDir.js";
const CommonDataPath = "Data";

let StartFunc = ({ inFileName }) => {
    const LocalFileName = inFileName;
    const LocalDataPath = StartFuncCommonExpose();

    let LocalReturnData = { KTF: false };

    try {
        const data = fs.readFileSync(`${LocalDataPath}/${CommonDataPath}/${LocalFileName}.json`, 'utf8');

        LocalReturnData.KTF = true;
        LocalReturnData.JsonData = data;

        return LocalReturnData;
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
