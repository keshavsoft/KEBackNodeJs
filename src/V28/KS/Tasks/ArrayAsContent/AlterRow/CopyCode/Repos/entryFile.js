import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({ inPostBody, inFileName, inPk }) => {
    return postDefaultFuncFromDal({ inPostBody, inFileName, inPk });
};

export {
    postDefaultFunc
};