import express from 'express';
const app = express()
const port = 3000;

import { router as routerFromFileAsObject } from "./FileAsObject/routes.js";

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/FileAsObject', routerFromFileAsObject);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`Open here http://localhost:${port}`);

});