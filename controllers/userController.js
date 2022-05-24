const User = require("../models/userSchema");
const path=require('path')
const fs=require('fs')

const displayRegisterPage = async (req, res) => {
    const users=await User.find()
    res.render("register", {users:users});
};

const register = async (req, res) => {

 const { image } = req.files;
  image.mv(path.resolve(__dirname, "../public/images", image.name), (error) => {
    if (!error) {
      User.create({...req.body, image:image.name},(error, doc) => {
          if (!error) {
            res.redirect("/api/displayAllUsersPage");
          } else {
            res.redirect("/api/");
          }
        }
      );
    } else {
      res.redirect("/api/");
    }
  });
};

const displayAllUsersPage = async (req, res) => {
  res.render("displayAllUsers");
};

module.exports = {
  displayRegisterPage,
  displayAllUsersPage,
  register,
};
