const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');


const items = require('./routes/api/Item');
const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/api/items',items);

// Serve Static assets if in production
if (process.env.NODE_ENV==='production') {
  app.use(express.static('client/build'));
  app.get('*', (req,res)=>{
      res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}
// app.use(express.static(__dirname + "publc"));






const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server running on port :"+port))
