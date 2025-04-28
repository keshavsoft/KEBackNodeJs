import {
    DeleteFunc as DeleteFuncFromRepo
} from '../Repos/entryFile.js';

let DeleteFunc = (req, res) => {
    const LocalFileName = req.params.FileName;

    let LocalFromRepo = DeleteFuncFromRepo({ inFileName: LocalFileName });

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).end();
};

export {
    DeleteFunc
};