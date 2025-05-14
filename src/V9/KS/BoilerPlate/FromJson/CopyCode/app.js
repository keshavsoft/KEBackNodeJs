import express from 'express';
const app = express();
const port = 3000;

import { router as routerFromV1 } from "./V1/routes.js";
import { router as routerFromV2Secured } from "./V2Secured/routes.js";

import { router as routerFromProtect } from "./protect.js";

app.use(express.static('public'));

app.use("/V1", routerFromV1);
app.use("/V2Secured", routerFromProtect, routerFromV2Secured);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});