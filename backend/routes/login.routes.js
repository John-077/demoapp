// Import express 
const express = require("express");
// import router
const router = express.Router();

// import login controller
const loginController = require("../controllers/login.controller");
// pas the login request to the controller
router.post("/login", loginController.logIn);


// export the router
module.exports = router;