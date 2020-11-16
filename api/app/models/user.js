const mongoose = require("mongoose");

const bmgSchema = mongoose.Schema(
  {
    username: String,
    fullName: String,
    birthday: String,
    email: String,
    password: String,
    profilePhoto: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("bmgdb", bmgSchema);
