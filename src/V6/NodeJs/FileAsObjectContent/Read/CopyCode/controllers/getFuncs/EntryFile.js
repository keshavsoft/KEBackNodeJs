import {
    GetFunc as GetFuncRepo
} from '../../repos/getFuncs/EntryFile.js';

let GetFunc = (req, res) => {
    const LocalFileName = req.params.FileName;

    let LocalFromRepo = GetFuncRepo({ inFileName: LocalFileName });

    if (LocalFromRepo.KTF === false) {
        res.status(404).send(LocalFromRepo.KReason);
        
        return;
    };

    res.status(200).send(LocalFromRepo.JsonData);
};

export {
    GetFunc
};