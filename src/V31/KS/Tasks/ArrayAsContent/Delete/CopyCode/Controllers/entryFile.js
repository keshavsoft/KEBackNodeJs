import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = async (req, res) => {
    let LocalFileName = req.params.FileName;
    let LocalKey = req.params.Key;

    let LocalFromRepo = await postDefaultFuncFromRepo({
        inKey: LocalKey,
        inFileName: LocalFileName
    });

    if (LocalFromRepo.KTF === false) {
        res.status(404).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo.JsonData);
};

export {
    postFilterDataFromBodyFunc
};