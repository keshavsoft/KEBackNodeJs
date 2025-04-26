import {
    postDefaultFunc as postDefaultFuncFromDal,
} from '../dals/entryFile.js';

let postDefaultFunc = async ({ inKey, inValu, inFileName }) => {
    return postDefaultFuncFromDal({ inKey, inValu, inFileName });
};

export {
    postDefaultFunc
};