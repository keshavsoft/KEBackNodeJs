import express from 'express';

const router = express.Router();

import { router as routerFromInsertWithPk } from "./InsertWithPk/routes.js";

router.use("/InsertWithPk", routerFromInsertWithPk);

export { router };