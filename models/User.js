const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      require: true,
      min: 3,
      max: 20,
    },
    contact: {
      type: String,
      unique: true,
    },

    secondContact: {
      type: String,
      unique: true,
    },
    address: {
      type: String,
      max: 50,
    },

    ref: {
      type: String,
    },
    booldPressure: {
      type: String,
    },

    diabetes: {
      type: String,
    },

    disease: {
      type: String,
    },
    remarks: {
      type: String,
    },

    password: {
      type: String,
      default: "123456789",
      min: 6,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
    city: {
      type: String,
      max: 50,
    },
    appiontments: {
      type: Array,
      default: [],
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
