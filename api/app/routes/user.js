module.exports = (app) => {
  const bmg = require("../controllers/user.js");
  app.post("/api/users", bmg.create);
  app.delete("/api/users", bmg.delete);
};
