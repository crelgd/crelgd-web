const express = require("express");

const app = express();
const port = 5517;

app.use('/', express.static('public'))

app.listen(port, () => {
    console.log(`Server starts on port ${port}`);
});