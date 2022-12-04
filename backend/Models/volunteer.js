const mongoose = require("mongoose");

const volunteerSchema = mongoose.Schema(
  {
    contact: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
    language: {
      type: String,
    },
    days: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("volunteer", volunteerSchema);
