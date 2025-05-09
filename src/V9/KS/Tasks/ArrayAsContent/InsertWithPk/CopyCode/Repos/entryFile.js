import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({ inRequestBody, inFileName }) => {
    return postDefaultFuncFromDal({ inRequestBody, inFileName });
};

export {
    postDefaultFunc
};