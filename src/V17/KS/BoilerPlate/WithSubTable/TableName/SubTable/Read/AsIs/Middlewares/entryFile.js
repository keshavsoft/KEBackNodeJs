import fs from "fs";

import ParamsJson from '../../../../CommonFuncs/params.json' with {type: 'json'};

let GetFunc = (req, res, next) => {
    const LocalFileName = ParamsJson.TableName;
    const LocalParams = req.params;
    const LocalDataPath = ParamsJson.DataPath;
    const LocalRowIndex = LocalParams.RowIndex;
    const LocalKeyName = LocalParams.KeyName;

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
            req.status(500).json({Reason:"No Row Data"});
        };

        next();

    } catch (err) {
        req.status(500).send(err);
    };

   
};

export { GetFunc };
