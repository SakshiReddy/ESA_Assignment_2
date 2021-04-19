var express = require('express'),
  app = express(),
  port = process.env.PORT || 4000,
  mongoose = require('mongoose'),

  User = require('./models/userModel'), 
  ProductItem = require('./models/productModel'),
  Cart = require('./models/cartModel'),


  bodyParser = require('body-parser');
  

const url="mongodb://localhost:27017/new";
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true,useCreateIndex: true,useFindAndModify:false}); 

const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./service/routes');
routes(app); 



app.listen(port);


console.log('shopping cart RESTful API server started on: ' + port);