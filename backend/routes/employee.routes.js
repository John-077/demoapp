// Import express 
const express = require("express");
// import router
const router = express.Router();
// import employee controller
const employeeController = require("../controllers/employee.controller");
// create a post request handler for the add employee route
router.post("/add-employee", employeeController.addEmployee);
// export the router
module.exports = router;