import { StartFunc as ReadFromFile } from '../KFs/createFile.js';

let PostFunc = ({ inFileName, inInsertData }) => {
    let LocalFromLowDb = ReadFromFile({ inFileName, inInsertData });

    return LocalFromLowDb;
};

export {
    PostFunc
};