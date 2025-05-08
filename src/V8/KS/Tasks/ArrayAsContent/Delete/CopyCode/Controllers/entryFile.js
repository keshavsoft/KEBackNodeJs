import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = async (req, res) => {
    let LocalParam = req.params.FileName;
    let LocalRequestBody = req.body;
    let LocalKey = LocalRequestBody.Key;
    let LocalValue = LocalRequestBody.Value;
    console.log("LocalRequestBody:",LocalRequestBody,LocalValue);
    

    let LocalFromRepo = await postDefaultFuncFromRepo({ inKey: LocalKey, inValue: LocalValue, inFileName: LocalParam });

    if (LocalFromRepo.KTF === false) {
        res.status(404).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo.JsonData);
};

export {
    postFilterDataFromBodyFunc
};