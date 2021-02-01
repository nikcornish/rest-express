module.exports = (req, res, next) => {
  console.log(`${req.get('host')}`);
  console.log(`${req.originalUrl}`);  
  next();
};