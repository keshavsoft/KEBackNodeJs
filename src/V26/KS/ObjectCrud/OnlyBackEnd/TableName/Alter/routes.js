import express from 'express';

const router = express.Router();

import { router as routerFromWithPk } from "./1.WithKey/routes.js";
import { router as routerFromColumnsWithPk } from "./2.ColumnsWithPk/routes.js";

router.use("/WithKey", routerFromWithPk);
router.use("/ColumnsWithPk", routerFromColumnsWithPk);

export { router };