const mongoose = require("mongoose");

const volunteerSchema = mongoose.Schema(
  {
    contact: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    days: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("volunteer", volunteerSchema);
