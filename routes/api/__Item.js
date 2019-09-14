const express = require('express');
const router = express.Router();

// Item Model Mongoose
const Item = require('../../model/Item');


// @route   GET api.items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res)=>{
  Item.find()
    .sort({date : -1})
    .then(items => res.json(items))

});

// @route   Post api/items
// @desc    Post  Items
// @access  Public
router.post('/', (req, res)=>{
    let name = req.body.name;
 
  });

// @route   Delete api/items/:id
// @desc    Delete A  Items
// @access  Public
router.delete('/:id', (req, res)=>{

});

module.exports = router;