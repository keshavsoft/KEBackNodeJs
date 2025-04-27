import {
    postDefaultFunc as postDefaultFuncFromDal,
} from '../dals/entryFile.js';

let postDefaultFunc = async ({ inKey, inFileName }) => {
    return postDefaultFuncFromDal({ inKey, inFileName });
};

export {
    postDefaultFunc
};