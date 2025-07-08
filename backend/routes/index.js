// import the express module
const express = require("express");
// import the router module
const router = express.Router();
// import the login controller
const loginRouter = require("./login.routes");
// import the add employee controller
const employeeRouter = require("./employee.routes");
// add the login router to the middleware chain
router.use(loginRouter);
// add the add employee router to the middleware chain
router.use(employeeRouter);
// import the install routes
const installRouter = require("./install.routes");
// add the install router to the middleware chain
router.use(installRouter);

// export the router
module.exports = router;