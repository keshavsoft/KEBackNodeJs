import express from 'express';

var router = express.Router();

import {
    postFilterDataFromBodyFunc
} from '../Controllers/entryFile.js';

import { StartFunc as middlewarespostFilterDataFromBodyFunc } from "../Middlewares/entryFile.js";

router.delete('/:FileName', middlewarespostFilterDataFromBodyFunc, postFilterDataFromBodyFunc);

export { router };