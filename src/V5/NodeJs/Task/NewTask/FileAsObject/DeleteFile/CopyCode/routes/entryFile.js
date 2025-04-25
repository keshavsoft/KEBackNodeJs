import express from 'express';

var router = express.Router();

import {
    DeleteFunc
} from '../controllers/entryFile.js';

router.delete('/:FileName', DeleteFunc);

export { router };