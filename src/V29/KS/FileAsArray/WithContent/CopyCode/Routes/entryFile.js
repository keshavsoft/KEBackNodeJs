import express from 'express';

var router = express.Router();

import {
    PostFunc
} from '../Controllers/entryFile.js';

import { PostFunc as PostFuncMiddlewares } from "../Middlewares/entryFile.js";

router.post('/:FileName', PostFuncMiddlewares, PostFunc);

export { router };