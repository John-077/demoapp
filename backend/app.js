// Import express and mysql
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// imoprt the routes
const routes = require("./routes/index");
// add the routes to the middleware chain
app.use(routes);


const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

