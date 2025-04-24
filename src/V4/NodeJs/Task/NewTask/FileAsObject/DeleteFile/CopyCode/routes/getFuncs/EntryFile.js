import express from 'express';

var router = express.Router();

import {
    GetFunc
} from '../../controllers/getFuncs/EntryFile.js';

router.delete('/:FileName', GetFunc);

export { router };