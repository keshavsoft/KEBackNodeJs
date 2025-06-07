import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnCol1,LocalCoumnCol2}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnCol1,LocalCoumnCol2});

    return LocalFromDal;
};

export {
    postDefaultFunc
};