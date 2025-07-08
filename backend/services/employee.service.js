// import the db connection file
const connection = require("../config/db.config.js");
// A function to handle the add employee request
const addEmployee = async (employeeData) => {
    try {
        // Call the employee service to add an employee to the database
        const sql = `INSERT INTO employee_test (first_name, last_name, email, password) VALUES (?, ?, ?, ?)`;
        const values = [employeeData.first_name, employeeData.last_name, employeeData.email, employeeData.password];
        // Execute the query
        const result = await connection.query(sql, values);
        console.log(result);
        
        // If the employee is added successfully, return success response. Otherwise, return failure response
        if (result.insertId > 0) {
            // get the newly inserted employee id
            const insertId = result.insertId;
            return insertId;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error adding employee:", error);
       return null;
    }
}

module.exports = { addEmployee };