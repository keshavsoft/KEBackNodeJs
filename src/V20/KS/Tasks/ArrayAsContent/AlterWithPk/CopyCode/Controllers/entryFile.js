import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalParam = req.params.FileName;
    let LocalPk = req.params.inPk;
    let LocalRequestBody = req.body;
    let LocalKey = LocalRequestBody.Key;
    let LocalValue = LocalRequestBody.Value

    let LocalFromRepo = postDefaultFuncFromRepo({
        inKey: LocalKey,
        inValue: LocalValue, inFileName: LocalParam,
        inPk: LocalPk
    });

    if (LocalFromRepo.KTF === false) {
        res.status(404).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).send(LocalFromRepo.JsonData);
};

export {
    postFilterDataFromBodyFunc
};