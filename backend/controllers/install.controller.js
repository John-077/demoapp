// import the install service
const installService = require("../services/install.service.js");

// A function to handle the install request
const installDirectFromApi = async (req, res) => {
    // Call the install service to run the initial SQL queries
    const applicationInstalled = await installService.installDirectFromApi();
    // If the queries are executed successfully, return success response. Otherwise, return failure response
    if (applicationInstalled) {
        // Send a success/failure response back to the client
        const response = {
            status: "success",
            message: "Application installed successfully",
            data: applicationInstalled,
        }
      res.status(200).json(response);
    } else {
      res.status(403).send({ message: "Failure" });
    }
};

// Export the function
module.exports = { installDirectFromApi };