const checkName = (request, response, next) => {
  if (request.body.name) {
    return next();
  } else {
    response.status(400).json({ error: "Name is required" });
  }
};

// const checkPrice = (request, response, next) => {
//   if (request.body.price) {
//     return next();
//   } else {
//     response.status(400).json({ error: "Price is required" });
//   }
// };
module.exports = { checkName };
