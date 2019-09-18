const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

// Item Model Mongoose
const Item = require("../../model/Item");
const util = require("../../config/utils");
//  import util from '../../config/utils'
const db = require("../../model/db");

console.log(date());

// @route   GET api.items
// @desc    Get All Items
// @access  Public
router.get("/", (req, res) => {
  // console.log(now.today);

  con.query("SELECT * FROM items ORDER BY id DESC", function(err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// @route   Post api/items
// @desc    Post  Items
// @access  Private
router.post("/", auth, (req, res) => {
  let name = req.body.name;
  console.log(req.body);

  con.query(
    "INSERT INTO `items` (`id`, `name`, `date_added`) VALUES (NULL, '" +
      name +
      "', current_timestamp())",
    function(err, result) {
      if (err) throw err;
      console.log("1 Row Inserted");

      con.query("SELECT id, name FROM items ORDER BY id DESC LIMIT 1", function(
        err,
        result
      ) {
        if (err) throw err;
        res.json(result[0]);
      });
    }
  );
});

// @route   Delete api/items/:id
// @desc    Delete A  Items
// @access  Private
router.delete("/:id", auth, (req, res) => {
  let id = req.params.id;

  con.query(`DELETE FROM items WHERE id=${id}`, function(err, result) {
    if (err) {
      res.status(400).json({ success: false });
      throw err;
    }
    console.log("1 Row Deleted");

    res.json({ success: true });
  });
});

// export default router;

// OR ES6

function date() {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;
  console.log(dateTime);
  return dateTime;
}

function selectOne(id) {
  con.query(`SELECT * FROM items ORDER BY ${id} DESC`, function(err, result) {
    if (err) {
      throw err;
      return false;
    }
    return result;
  });
}
module.exports = router;
