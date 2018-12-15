// apiRoutes <5 tables route to waiting

var tableData = require("../data/tableData");
var waitListData = require("../data/waitinglistData");

module.exports = function (app) {
  app.get("/api/tables", function (req, res) {
    res.json(tableData);
  });

  app.get("/api/waitlist", function (req, res) {
    res.json(waitListData);
  });

  app.post("/api/tables", function (req, res) {
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    } else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

  app.delete("/api/tables/:customer", function (req, res) {
    var customer = req.params.customer;
    tableData.splice(customer, 1);
    if (waitListData.length) {
      var newCustomer = waitListData.shift();
      tableData.push(newCustomer);
    };
    res.json(true);
  });

  app.post("/api/clear", function () {
    tableData = [];
    waitListData = [];

    console.log(tableData);
  });
};