import express from 'express';

const router = express.Router();

import { router as routerFromInsertWithPk } from "./InsertWithPk/routes.js";
import { router as routerFromReadData } from "./ReadData/routes.js";
import { router as routerFromInsertWithColumns } from "./InsertWithColumns/routes.js";
import { router as routerFromGetSchema } from "./GetSchema/routes.js";
import { router as routerFromGetColumnsAsArray } from "./GetColumnsAsArray/routes.js";

router.use("/InsertWithPk", routerFromInsertWithPk);
router.use("/ReadData", routerFromReadData);
router.use("/InsertWithColumns", routerFromInsertWithColumns);
router.use("/GetSchema", routerFromGetSchema);
router.use("/GetColumnsAsArray", routerFromGetColumnsAsArray);

export { router };