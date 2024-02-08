const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema(
  {
    patientId: {
      type: String,
    },
    appiontmentDate: {
      type: String,
    },

    serialNo: {
      type: String,
    },

    subtotal: {
      type: Number,
    },
    side: {
      type: String,
    },
    clickedPoints: [],
    status: {
      type: String,
      default: "pending",
    },
    discount: {
      type: Number,
    },
    discountReason: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", AppointmentSchema);
