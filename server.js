const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 7500;

require('./routes/html-routes')(app);

app.listen(PORT, () => {
    console.log("Server listening on PORT: " + PORT);
});