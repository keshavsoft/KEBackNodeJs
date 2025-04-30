import {
    postDefaultFunc as postDefaultFuncFromDal,
} from '../dals/entryFile.js';

let postDefaultFunc = async ({ inKey, inValu }) => {
    return postDefaultFuncFromDal({ inKey, inValu });
};

export {
    postDefaultFunc
};