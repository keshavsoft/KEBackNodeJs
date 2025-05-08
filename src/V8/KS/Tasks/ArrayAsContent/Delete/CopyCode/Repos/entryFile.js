import {
    postDefaultFunc as postDefaultFuncFromDal,
} from '../Dals/entryFile.js';

let postDefaultFunc = ({ inKey, inFileName }) => {
    return postDefaultFuncFromDal({ inKey, inFileName });
};

export {
    postDefaultFunc
};