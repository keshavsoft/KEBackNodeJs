import { StartFunc as StartFuncFromDeleteFromFile } from '../KFs/deleteFromFile.js';

let postDefaultFunc = ({ inKey, inFileName }) => {
    let LocalFromLowDb = StartFuncFromDeleteFromFile({ inKey, inFileName });

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};