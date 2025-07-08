// import the express module
const express = require("express");
// import the router module
const router = express.Router();
// import the install controller
const installController = require("../controllers/install.controller");
// create a post request handler for the install route
router.get("/install", installController.installDirectFromApi);
// export the router
module.exports = router;