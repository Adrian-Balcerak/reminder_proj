let database = require("../database");
const passport = require("passport");



let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  loginSubmit: (req, res) => {
    let formData = req.body;
    let email = formData.email;
    let password = formData.password;
    // implement
  },

  registerSubmit: (req, res) => {
    // implement
  },
};

module.exports = authController;
