const logger = (req, res, next) => {
  console.log(`${req.get('host')}`);
  console.log(`${req.originalUrl}`);  
  next();
};

module.exports = logger;