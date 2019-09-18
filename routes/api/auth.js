const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

// Item Model Mongoose
// const Item = require('../../model/Item');

const db = require("../../model/db");

// @route   POST api/auth
// @desc    Auth user
// @access  Public
router.post("/", (req, res) => {
  const { email, password } = req.body;

  // Simple Validiation
  if (!email || !password) {
    return res.status(400).json({ msg: "Please Enter All Fields" });
  }

  con.query(`SELECT * FROM users WHERE email='${email}' LIMIT 1`, function(
    err,
    result
  ) {
    if (err) throw err;

    if (!result[0])
      return res.status(400).json({ msg: "User does not exists" });

    const { emai, id, name } = result[0];
    // Validate Password

    bcrypt.compare(password, result[0].password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });
      jwt.sign(
        { id: id },
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;

          res.status(200).json({
            msg: "User details",
            token: token,
            user: {
              emai: email,
              id: id,
              name: name
            }
          });
        }
      );
    });
  });

  //  res.send("Register");
});

// @route   Get api/auth/user
// @desc    Auth user
// @access  Private
router.get("/user", auth, (req, res) => {
  con.query(
    `SELECT id, email, name, registered_date FROM users WHERE id='${req.user.id}' LIMIT 1`,
    function(err, result) {
      if (err) throw err;
      console.log(result);
      res.json(result);
    }
  );
});

module.exports = router;
