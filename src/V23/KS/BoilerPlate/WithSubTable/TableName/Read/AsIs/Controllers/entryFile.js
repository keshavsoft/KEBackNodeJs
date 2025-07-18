import {
    GetFunc as GetFuncRepo
} from '../Repos/entryFile.js';

let GetFunc = (req, res) => {
    let LocalFromRepo = GetFuncRepo();

    res.set('Content-Type', 'text/plain');
    
    if (LocalFromRepo.KTF === false) {
        res.status(404).send(LocalFromRepo.KReason);

        return;
    };

    res.status(200).json(LocalFromRepo.JsonData);
};

export {
    GetFunc
};