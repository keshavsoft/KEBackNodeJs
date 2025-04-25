import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../../repos/postFuncs/EntryFile.js';

import { StartFunc as StartFuncCreateToken } from "./CreateToken.js";

let postFilterDataFromBodyFunc = async (req, res) => {
    let LocalRequestBody = req.body;
    let LocalUserName = LocalRequestBody.UserName;
    let LocalPassword = LocalRequestBody.Password;

    let LocalFromRepo = await postDefaultFuncFromRepo({ inUserName: LocalUserName, inPassword: LocalPassword });

    if (LocalFromRepo === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };
    const jVarLocalToken = StartFuncCreateToken({ inObject: LocalFromRepo.JsonData.DataPk });

    res.cookie('KForAnyToken', jVarLocalToken, { maxAge: 900000, httpOnly: false }).end(jVarLocalToken);

    res.status(200).end();
};

export {
    postFilterDataFromBodyFunc
};