const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    phoneNumber: {
      type: Number,
    },
    Time_Schedule: {
      type: String,
      enum: ["WEEKDAY", "WEEKDEND"],
      default: "WEEKDAY",
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const UsersData = mongoose.model("UsersData", UserSchema);
module.exports = UsersData;
