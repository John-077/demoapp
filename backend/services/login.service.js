// import then db connection file
const connection = require("../config/db.config.js");
// A function to handle the login request
async function logIn(employeeData) {
  try {

      console.log('Inside login service');
    console.log(employeeData);
    const sql = `SELECT * FROM employee_test WHERE email = '${employeeData.email}' AND password = '${employeeData.password}'`;
    // const values = [employeeData.email, employeeData.password];
    // Execute the query
    const result = await connection.query(sql);
    console.log(result);
    if (result.length > 0) {
      return result;
    }else{
      return null;
    }
    

    
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
}

module.exports = { logIn };

