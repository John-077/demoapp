// import the employee service
const employeeService = require("../services/employee.service.js");
// A function to handle the add employee request
const addEmployee = async (req, res) => {
    console.log(req.body);
    

    // Call the employee service to add an employee to the database
    const employeeAdded = await employeeService.addEmployee(req.body);
    // If the employee is added successfully, return success response. Otherwise, return failure response
    if (employeeAdded) {
      const response = {
        status: "success",
        message: "Employee added successfully",
        data: employeeAdded,
      };
      res.status(200).json(response);
    } else {
      const response = {
        status: "failure",
        message: " failed to add employee",
      };
      res.status(403).json(response);
    }
};
// Export the function
module.exports = { addEmployee };