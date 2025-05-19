import {
    GetFunc as GetFuncRepo
} from '../Repos/entryFile.js';

let GetFunc = (req, res) => {
    const LocalFileName = req.params.FileName;

    let LocalFromRepo = GetFuncRepo({ inFileName: LocalFileName });

    if (LocalFromRepo.KTF === false) {
        res.status(404).send(LocalFromRepo.KReason);

        return;
    };

    res.status(200).json(LocalFromRepo.JsonData);
};

export {
    GetFunc
};