import fs from "fs";
import { StartFunc as StartFuncCommonExpose } from "../../../CommonExpose/returnFullDataPath.js";

let StartFunc = ({ inFileName }) => {
    const LocalFileName = inFileName;
    const LocalDataPath = StartFuncCommonExpose();

    let LocalReturnData = { KTF: false };

    try {
        fs.writeFileSync(`${LocalDataPath}/${LocalFileName}.json`, JSON.stringify({}), { flag: 'wx' });

        LocalReturnData.KTF = true;
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
