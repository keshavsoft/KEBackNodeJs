import express from 'express';
import bodyParser from "body-parser";
var router = express.Router();

import {
    PostFunc
} from '../Controllers/entryFile.js';

import { PostFunc as PostFuncMiddlewares } from "../Middlewares/entryFile.js";
router.use(bodyParser.json());
router.post('/:FileName', PostFuncMiddlewares, PostFunc);

export { router };