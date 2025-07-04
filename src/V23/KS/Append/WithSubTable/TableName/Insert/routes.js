import express from 'express';

const router = express.Router();

import { router as routerFromSchemaColumnsOnly } from "./SchemaColumnsOnly/routes.js";
import { router as routerFromInsertColumnExist } from "./InsertColumnExist/routes.js";
import { router as routerFromInsertAsIs } from "./1.AsIs/routes.js";
import { router as routerFromAsIsAndTS } from "./3.AsIsAndTS/routes.js";
import { router as routerFromAsIsNoPk } from "./2.AsIsNoPk/routes.js";

router.use("/SchemaColumnsOnly", routerFromSchemaColumnsOnly);
router.use("/InsertColumnExist", routerFromInsertColumnExist);
router.use("/InsertAsIs", routerFromInsertAsIs);
router.use("/AsIsAndTS", routerFromAsIsAndTS);
router.use("/AsIsNoPk", routerFromAsIsNoPk);

export { router };