const mongoose = require("mongoose");

const SideSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Side", SideSchema);
