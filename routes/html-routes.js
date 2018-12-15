const path = require('path');

module.exports = app => {
    app.get('/tables', (request, response) => {
        res.sendFile(path.join(__dirname + '/../public/tables.html'));
    })

    app.get('/reserve', (request, response) => {
        res.sendFile(path.join(__dirname + '/../public/reserve.html'));
    });

    // If no matching route is found default to home
    app.use((request, response) => {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
}