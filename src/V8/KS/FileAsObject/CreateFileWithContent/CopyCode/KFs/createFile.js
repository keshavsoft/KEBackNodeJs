import fs from "fs";
import { StartFunc as StartFuncCommonExpose } from "../../../CommonExpose/returnRootDir.js";
import { Console } from "console";
const CommonDataPath = "Data";

let StartFunc = ({ inFileName, inInsertData }) => {
    const LocalFileName = inFileName;
    let LocalInsertData = inInsertData;
    let LocalReturnData = { KTF: false };
    const LocalDataPath = StartFuncCommonExpose();

    try {
        fs.writeFileSync(`${LocalDataPath}/${CommonDataPath}/${LocalFileName}.json`, JSON.stringify(LocalInsertData), { flag: 'wx' });

        LocalReturnData.KTF = true;
        LocalReturnData.JsonData = `${LocalFileName}.json File Created Successfully`;
        console.log(`${LocalFileName}.json File Created Successfully`);
    } catch (err) {
        if (err.code === 'EEXIST') {
            console.log(`${LocalFileName}.json File already exists.`);
            LocalReturnData.KReason = `${LocalFileName}.json File already exists.`;
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
