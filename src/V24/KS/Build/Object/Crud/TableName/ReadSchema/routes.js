import express from 'express';

const router = express.Router();

import { router as routerFromColumnsAsArray } from "./ColumnsAsArray/routes.js";
import { router as routerFromSchema } from "./Schema/routes.js";

router.use("/ColumnsAsArray", routerFromColumnsAsArray);
router.use("/Schema", routerFromSchema);

export { router };