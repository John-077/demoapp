// import the  login service
const loginService = require("../services/login.service.js");


// A function to handle the login request 
 async function logIn (req, res, next)  {
    // Call the login service to check if the employee exists in the database
    // const employeeData = req.body;
    const employeeData = await loginService.logIn(req.body);
    if (employeeData) {
      const response = {
        status: "success",
        message: "Login successful",
        // data: result,
      };
      res.status(200).json(response);
    } else {
      const response = {
        status: "failure",
        message: "Invalid email or password",
      };
      res.status(403).json(response);
    }
}

module.exports = { logIn };

