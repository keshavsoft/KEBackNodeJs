import express from 'express';

const router = express.Router();

import { router as routerFromAsIs } from "./AsIs/routes.js";
import { router as routerFromSelColsAsArray } from "./SelColsAsArray/routes.js";
import { router as routerFromSelColumns } from "./SelColumns/routes.js";
import { router as routerFromSchema } from "./Schema/routes.js";
import { router as routerFromGroupSingleColLength } from "./GroupSingleColLength/routes.js";
import { router as routerFromSingleColumn } from "./SingleColumn/routes.js";
import { router as routerFromColumnsAsArray } from "./ColumnsAsArray/routes.js";
import { router as routerFromRowDataWithPk } from "./RowDataWithPk/routes.js";

router.use("/AsIs", routerFromAsIs);
router.use("/SelColsAsArray", routerFromSelColsAsArray);
router.use("/SelColumns", routerFromSelColumns);
router.use("/Schema", routerFromSchema);
router.use("/GroupSingleColLength", routerFromGroupSingleColLength);
router.use("/SingleColumn", routerFromSingleColumn);
router.use("/ColumnsAsArray", routerFromColumnsAsArray);
router.use("/RowDataWithPk", routerFromRowDataWithPk);

export { router };