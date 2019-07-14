// Importing the express module and assigning it to a variable.
const express = require("express");
const path = require("path");

// Creating our server by running express() and assigning it to a variable.
const app = express();

/* .get("route", (request, response) => {}) Used to create a route for GET requests from the client. Will respond based on route for example:
   https://someWebSite.com"route" */
//app.get("/", (req, res) => {
// res.send("content to send back") Used to send text as a response to the request.
// res.send("<h1>Homepage</h1>");
// res.sendFile("path to file") Used to send a file as a response to the request.
//res.sendFile(path.join(__dirname, "public", "index.html"));
//});

/* .use(express.static("folder to make static")) Used to turn your folder into a 'static' folder. From what I can gather, it makes all of your
   routes for you based on the files in the static folder. Good for static webpages that render static content. */
app.use(express.static(path.join(__dirname, "public")));

// Creating a variable to house the port number of either the current machine or defaulting to 5000.
const PORT = process.env.port || 5000;

// .listen(port number, () => {})Makes our server start listening for request (pretty much just starts the server).
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
