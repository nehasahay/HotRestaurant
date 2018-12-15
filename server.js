const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 7500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

require('./routes/html-routes')(app);

app.listen(PORT, () => {
    console.log("Server listening on PORT: " + PORT);
});