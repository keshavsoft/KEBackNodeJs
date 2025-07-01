import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnUserName,LocalCoumnPassword}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnUserName,LocalCoumnPassword});

    return LocalFromDal;
};

export {
    postDefaultFunc
};