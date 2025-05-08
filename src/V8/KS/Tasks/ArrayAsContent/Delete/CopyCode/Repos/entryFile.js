import {
    postDefaultFunc as postDefaultFuncFromDal,
} from '../Dals/entryFile.js';

let postDefaultFunc = async ({ inKey, inValue, inFileName }) => {
    return postDefaultFuncFromDal({ inKey, inValue, inFileName });
};

export {
    postDefaultFunc
};