import express from 'express';

var router = express.Router();

import {
    postFilterDataFromBodyFunc
} from '../controllers/entryFile.js';

import { StartFunc as middlewarespostFilterDataFromBodyFunc } from "../middlewares/entryFile.js";

router.post('/:FileName', middlewarespostFilterDataFromBodyFunc, postFilterDataFromBodyFunc);

export { router };