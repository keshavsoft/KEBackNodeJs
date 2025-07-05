import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;

    let LocalFromRepo = postDefaultFuncFromRepo({
        inRequestBody: LocalRequestBody
    });
 
    res.set('Content-Type', 'text/plain');
    
    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };

   
    res.send(LocalFromRepo.SuccessText);
};

export {
    postFilterDataFromBodyFunc
};