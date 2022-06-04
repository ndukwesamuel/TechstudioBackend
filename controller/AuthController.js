const { request } = require("express");
const bcrypt = require("bcrypt");
const UsersData = require("../models/UserModel");

// Register
const index_page___ = async (req, res) => {
  const user = await new UsersData({
    first_name: "tundae",
    last_name: "tundae",
    email: "tundaw@gmail.com",
    password: "12345678901234567890",
  });

  await user.save();
  res.status(200).json(user);
};

const register_user = async (req, res) => {
  try {
    let data = [
      req.body.first_name,
      req.body.last_name,
      req.body.email,
      req.body.password,
    ];

    // generate password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = await new UsersData({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: hashedPassword,
    });

    // res.json(user);
    // reurn password
    const newuser = await user.save();
    res.status(200).json(newuser);
  } catch (error) {
    res.json(error);
  }
};

const login_user = async (req, res) => {
  try {
    const user = await UsersData.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json("not found");
    } else if (user) {
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        return res.status(400).json("wrong password ");
      } else {
        return res.status(200).json(user);
      }
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};
module.exports = {
  index_page___,
  register_user,
  login_user,
};
