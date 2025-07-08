// import the db connection file
const { promises } = require("dns");
const connection = require("../config/db.config.js");
// Import the fs module to read in files
const fs = require("fs");

// A function to install DB directly from the api
async function installDirectFromApi() {
    // Temporary variable to hold the sql queries
    let queries = [];
    let finalMessage = {};
    console.log("Installing DB directly from the api");

    // Query file 
    const queryfile = __dirname + "/../sql/initial-queries.sql";
    console.log(queryfile);
    let templine = "";

    // Read the sql file
    const lines = await fs.readFileSync(queryfile, "utf8").split("\n");
// Loop through each line
const executed = await new Promise((resolve, reject) => {
    lines.forEach((line) => {
        if (line.trim().startsWith("--") || line.trim() === "") {
            return;
        }
        templine += line;
        if (line.endsWith(";")) {
            // If it has a semicolon at the end, execute the query
            const sqlQuery = templine.trim();
            queries.push(sqlQuery);
            templine = "";
        }
    });
    resolve("Queries executed successfully");
});

// Loop through each query and execute it
  for (let i = 0; i < queries.length; i++) {

    try {
        console.log(queries[i]);
        const result = await connection.query(queries[i]);
        console.log("Table created", result);
    } catch (error) {
        // console.log(error);
        finalMessage.message = "Not all tables are created" + error;
    }
  }
  console.log(finalMessage);
  if (!finalMessage.message) {
    finalMessage.message = "All tables are created";
    
  }
  
  return finalMessage;
}

// Export the function
module.exports = { installDirectFromApi };