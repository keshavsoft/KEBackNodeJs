import {
    PostImageAsBase64Func as PostImageAsBase64FuncRepo
} from '../../repos/postFuncs/EntryFile.js';

let PostImageAsBase64Func = async (req, res) => {
    let LocalBody = req.body;

    const LocalFromRepo = await PostImageAsBase64FuncRepo({
        inPostBody: LocalBody
    });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).send(`${LocalFromRepo.pk}`);
};

export {
    PostImageAsBase64Func
};
