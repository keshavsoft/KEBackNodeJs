import fs from "fs";
import ParamsJson from '../../../../CommonFuncs/params.json' with { type: 'json' };

let CommonReadFunc = ({ inRowIndex, inKeyName }) => {
    const LocalFileName = ParamsJson.TableName;
    const LocalDataPath = ParamsJson.DataPath;
    const filePath = `${LocalDataPath}/${LocalFileName}.json`;
    let LocalReturnData = { KTF: false };

    if (!fs.existsSync(filePath)) {
        LocalReturnData.KReason = `${LocalFileName}.json File does not exist in ${LocalDataPath} Folder.`;
        console.warn(LocalReturnData.KReason);
        return LocalReturnData;
    }

    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const LoalRowData = JSON.parse(data).find(el => el.pk == inRowIndex);

        if (!LoalRowData) {
            LocalReturnData.KReason = `No Row Data with index ${inRowIndex}`;
            return LocalReturnData;
        }

        if (!Array.isArray(LoalRowData[inKeyName])) {
            LocalReturnData.KReason = `${inKeyName} Key Not SubTable`;
            return LocalReturnData;
        }

        LocalReturnData.KTF = true;
        LocalReturnData.JsonData = LoalRowData[inKeyName];
        return LocalReturnData;
    } catch (err) {
        LocalReturnData.KReason = `Error reading ${LocalFileName} file.`;
        console.warn(LocalReturnData.KReason);
        return LocalReturnData;
    }
};

let StartFunc = ({ inRowIndex, inKeyName }) => {
    return CommonReadFunc({ inRowIndex, inKeyName });
};

export { StartFunc };
