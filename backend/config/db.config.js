require("dotenv").config();
const msql = require("mysql2/promise");
// create connection

const dbConfig = {
  connectionLimit: 10,
  user: "demoapp",
  password: "demoapp",
  database: "demoapp",
  host: "localhost",
};

// Create the connection pool
const pool = msql.createPool(dbConfig);
// create an async function to ececute sql queries
async function query(sql, params) {
  const [rows] = await pool.execute(sql, params);
  return rows;
}

module.exports = { query };
