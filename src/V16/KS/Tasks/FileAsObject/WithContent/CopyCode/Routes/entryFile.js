import express from 'express';
import bodyparser from "body-parser";

var router = express.Router();

import {
    PostFunc
} from '../Controllers/entryFile.js';

router.use(bodyparser.json());

router.post('/:FileName', PostFunc);

export { router };