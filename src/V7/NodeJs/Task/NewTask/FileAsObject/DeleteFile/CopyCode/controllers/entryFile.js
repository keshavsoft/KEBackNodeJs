import {
    DeleteFunc as DeleteFuncFromRepo
} from '../repos/entryFile.js';

let DeleteFunc = (req, res) => {
    const LocalFileName = req.params.FileName;

    let LocalFromRepo = DeleteFuncFromRepo({ inFileName: LocalFileName });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).end();
};

export {
    DeleteFunc
};