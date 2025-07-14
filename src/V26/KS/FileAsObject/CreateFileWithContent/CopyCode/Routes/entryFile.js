import express from 'express';

var router = express.Router();

import {
    PostFunc
} from '../Controllers/entryFile.js';

router.post('/:FileName', PostFunc);

export { router };