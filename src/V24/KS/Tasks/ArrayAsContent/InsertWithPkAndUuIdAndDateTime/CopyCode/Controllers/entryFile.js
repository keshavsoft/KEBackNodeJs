import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalParam = req.params.FileName;
    let LocalRequestBody = req.body;

    let LocalFromRepo = postDefaultFuncFromRepo({
        inRequestBody: LocalRequestBody, inFileName: LocalParam
    });

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).send(LocalFromRepo.JsonData);
};

export {
    postFilterDataFromBodyFunc
};