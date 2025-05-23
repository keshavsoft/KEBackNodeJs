import express from 'express';

const router = express.Router();

import { router as routerFromWithPk } from "./WithPk/routes.js";
import { router as routerFromAlterInColumnsWithPk } from "./AlterInColumnsWithPk/routes.js";

router.use("/WithPk", routerFromWithPk);
router.use("/AlterInColumnsWithPk", routerFromAlterInColumnsWithPk);

export { router };