import express from 'express';

const router = express.Router();

import { router as routerFromInsertWithPk } from "./InsertWithPk/routes.js";
import { router as routerFromReadData } from "./ReadData/routes.js";
import { router as routerFromInsertWithColumns } from "./InsertWithColumns/routes.js";
import { router as routerFromGetSchema } from "./GetSchema/routes.js";
import { router as routerFromGetColumnsAsArray } from "./GetColumnsAsArray/routes.js";
import { router as routerFromInsertColumnExist } from "./InsertColumnExist/routes.js";
import { router as routerFromReadSelColumns } from "./ReadSelColumns/routes.js";
import { router as routerFromReadSelColsAsArray } from "./ReadSelColsAsArray/routes.js";
import { router as routerFromGetSingleColumn } from "./GetSingleColumn/routes.js";
import { router as routerFromGroupSingleColumn } from "./GroupSingleColumn/routes.js";
import { router as routerFromGroupSingleColLength } from "./GroupSingleColLength/routes.js";

router.use("/InsertWithPk", routerFromInsertWithPk);
router.use("/ReadData", routerFromReadData);
router.use("/InsertWithColumns", routerFromInsertWithColumns);
router.use("/GetSchema", routerFromGetSchema);
router.use("/GetColumnsAsArray", routerFromGetColumnsAsArray);
router.use("/InsertColumnExist", routerFromInsertColumnExist);
router.use("/ReadSelColumns", routerFromReadSelColumns);
router.use("/ReadSelColsAsArray", routerFromReadSelColsAsArray);
router.use("/GetSingleColumn", routerFromGetSingleColumn);
router.use("/GroupSingleColumn", routerFromGroupSingleColumn);
router.use("/GroupSingleColLength", routerFromGroupSingleColLength);

export { router };