import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../dals/entryFile.js';

let postDefaultFunc = ({ inKey, inValue, inFileName }) => {
    return postDefaultFuncFromDal({ inKey, inValue, inFileName });
};

export {
    postDefaultFunc
};