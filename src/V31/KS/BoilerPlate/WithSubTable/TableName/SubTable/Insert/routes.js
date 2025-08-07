import express from 'express';

const router = express.Router();

import { router as routerFromInsertAsIs } from "./InsertAsIs/routes.js";

router.use("/InsertAsIs", routerFromInsertAsIs);

export { router };