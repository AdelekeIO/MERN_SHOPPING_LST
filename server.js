const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

// MongoDB
// const items = require('./routes/api/Item');
// Mysql
// const items = require('./routes/api/_Item'); 
const app = express();
const db = config.get('mongoURI');



// Bodyparser Middleware
app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

// Routes
app.use('/api/items',require('./routes/api/Item'));
app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));


// mongoose
//   .connect(db,{ useNewUrlParser: true })
//   .then(() => console.log('MongoDb Connected...')
//   .catch(err => console.log(err))
//   )


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

