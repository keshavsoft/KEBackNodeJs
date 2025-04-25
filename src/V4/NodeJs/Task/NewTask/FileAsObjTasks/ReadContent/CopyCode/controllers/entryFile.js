import {
    GetFunc as GetFuncRepo
} from '../repos/EntryFile.js';

let GetFunc = (req, res) => {
    let LocalFromRepo = GetFuncRepo();

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);

        return;
    };

    res.status(200).send(LocalFromRepo.JsonData);
};

export {
    GetFunc
};