import {
    PostImageAsBase64Func as PostImageAsBase64FuncDal
} from '../../dals/postFuncs/EntryFile.js';

let PostImageAsBase64Func = ({ inPostBody }) => {
    return PostImageAsBase64FuncDal({ inPostBody });
};

export {
    PostImageAsBase64Func
};
