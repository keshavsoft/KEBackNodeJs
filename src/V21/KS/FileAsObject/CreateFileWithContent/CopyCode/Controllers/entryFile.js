import {
    PostFunc as PostFuncRepo
} from '../Repos/entryFile.js';

let PostFunc = (req, res) => {
    const LocalFileName = req.params.FileName;
    const LocalBody = req.body;

    let LocalFromRepo = PostFuncRepo({ inFileName: LocalFileName, inInsertData: LocalBody });
    
    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };
    res.status(200).send(LocalFromRepo.JsonData);
 
};

export {
    PostFunc
};