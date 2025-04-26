import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../repos/entryFile.js';

let postFilterDataFromBodyFunc = async (req, res) => {
    let LocalParam = req.params.FileName;
    let LocalRequestBody = req.body;
    let LocalKey = LocalRequestBody.Key;
    let LocalValue = LocalRequestBody.Value

    let LocalFromRepo = await postDefaultFuncFromRepo({ inKey: LocalKey, inValu: LocalValue, inFileName: LocalParam });

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo.JsonData);
};

export {
    postFilterDataFromBodyFunc
};