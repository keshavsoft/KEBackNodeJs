import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
    let LocalCoumnPassword = LocalRequestBody.Password;
    let LocalCoumnUserName = LocalRequestBody.UserName;

    let LocalFromRepo = postDefaultFuncFromRepo({ LocalCoumnUserName, LocalCoumnPassword });

    res.set('Content-Type', 'text/plain');

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };


    res.send(LocalFromRepo.KTF);
};

export {
    postFilterDataFromBodyFunc
};