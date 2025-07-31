import express from 'express';

var router = express.Router();

import {
    postFilterDataFromBodyFunc
} from '../Controllers/entryFile.js';

router.delete('/:FileName/:Key', postFilterDataFromBodyFunc);

export { router };