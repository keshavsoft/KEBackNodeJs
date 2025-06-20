import fs from "fs";

import ParamsJson from '../../../../CommonFuncs/params.json' with {type: 'json'};

let StartFunc = ({ inRowIndex, inKeyName }) => {
    const LocalFileName = ParamsJson.TableName;
    const LocalDataPath = ParamsJson.DataPath;
    const LocalRowIndex = inRowIndex;
    const LocalKeyName = inKeyName;

    let LocalReturnData = { KTF: false };
    let filePath = `${LocalDataPath}/${LocalFileName}.json`;

    try {
        if (!fs.existsSync(filePath)) {
            LocalReturnData.KReason = `${LocalFileName}.json File does not exist in ${LocalDataPath} Folder.`;
            console.warn(LocalReturnData.KReason);
            return LocalReturnData;
        };

        const data = fs.readFileSync(`${LocalDataPath}/${LocalFileName}.json`, 'utf8');
        let LoalRowData = JSON.parse(data).find(el => el.pk == LocalRowIndex);

        if (!LoalRowData) {
            LocalReturnData.KReason = `No Row Data ${LocalRowIndex}`;
            return LocalReturnData;
        };

        if (!Array.isArray(LoalRowData[LocalKeyName])) {
            LocalReturnData.KReason = `${LocalKeyName} Key Not SubTable`;
            return LocalReturnData;
        };

        LocalReturnData.KTF = true;
        LocalReturnData.JsonData = LoalRowData[LocalKeyName];
    } catch (err) {
        LocalReturnData.KReason = `Error reading ${LocalFileName} file .`;
        console.warn(LocalReturnData.KReason);
        return LocalReturnData;
    };

    return LocalReturnData;
};

export { StartFunc };
