import express from 'express';
import bodyparser from "body-parser";

var router = express.Router();

import {
    PostFunc
} from '../Controllers/entryFile.js';

import { PostFunc as PostFuncMiddlewares } from "../Middlewares/entryFile.js";

router.use(bodyparser.json());

router.post('/:FileName', PostFuncMiddlewares, PostFunc);

export { router };

