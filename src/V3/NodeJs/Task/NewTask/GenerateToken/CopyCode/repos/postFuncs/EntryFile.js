import {
    postDefaultFunc as postDefaultFuncFromDal,
} from '../../dals/postFuncs/EntryFile.js';

let postDefaultFunc = async ({ inUserName, inPassword }) => {
    return postDefaultFuncFromDal({ inUserName, inPassword });
};

export {
    postDefaultFunc
};