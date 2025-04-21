import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../../repos/postFuncs/EntryFile.js';

let postFilterDataFromBodyFunc = async (req, res) => {
    let LocalRequestBody = req.body;
    let LocalUserName = LocalRequestBody.UserName;
    let LocalPassword = LocalRequestBody.Password;

    let LocalFromRepo = await postDefaultFuncFromRepo({ inUserName: LocalUserName, inPassword: LocalPassword });

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).end();
};

export {
    postFilterDataFromBodyFunc
};