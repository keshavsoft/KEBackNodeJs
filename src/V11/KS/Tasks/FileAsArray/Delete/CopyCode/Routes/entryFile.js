import express from 'express';

var router = express.Router();

import {
    DeleteFunc
} from '../Controllers/entryFile.js';

router.delete('/:FileName', DeleteFunc);

export { router };