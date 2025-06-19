import express from 'express';
const app = express();
const port = 3000;

import { router as routerFromV2 } from "./V2/routes.js";

app.use(express.static('public'));

app.use("/V2", routerFromV2);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});