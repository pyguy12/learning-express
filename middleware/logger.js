// The logger function below is a middle ware. It'll run before the callback of the routes. You must call next() at the end of the function.
const logger = (req, res, next) => {
  console.log(req.url);
  next();
};

module.exports = logger;
