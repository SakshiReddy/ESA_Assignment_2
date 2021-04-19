var mongoose = require('mongoose'),
User = mongoose.model('User'),
Cart = mongoose.model('Cart'),
Product = mongoose.model('Product');

exports.list_users = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
    console.log(user);
  });
};


exports.retrieve_cart = function(req, res) {
  User.find({uid:req.params.uid}, function(err, user) {
    if (err)
      res.send(err);
    Cart.find({uid:req.params.uid}, function(err, entry){
      if (err)
        res.send(err);
      res.json(entry);
    });
  });
};

exports.retrieve_user = function(req, res) {
  User.find({uid:req.params.uid}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
    }
  );
};

exports.update_cart = function(req, res) {
  
  User.find({uid:req.params.uid}, function(err, user) {
    if (err)
      res.send(err);
    Product.find({productId:req.query.productId}, function(err, entry){
      if (err)
        res.send(err);
      Cart.updateOne({uid:req.params.uid,productId:req.query.productId},{$inc:{quantity:req.query.quantity},$mul:{amount:req.query.quantity}},function(err,search){
        if(err)
          console.log(err);});
      res.json(entry);
    });
  });
};


exports.list_products = function(req, res) {
  Product.find({}, function(err, product) {
    if (err)
      res.send("Could not find products !");
    res.json(product);
  });
};

exports.list_user_products = function(req, res) {

  var cartList = [];

  User.find({uid:req.params.uid}, function(err, user) {
    if (err)
      res.send(err);
    
    Cart.find({uid:req.params.uid}, function(err, user) {
      if (err)
        res.send(err);
      console.log(cartList);
      for(var i = 0; i < user.length; i++){
        cartList[i] = user[i]["productId"];
      }
      console.log(cartList);
      Product.find({productId : {$nin:cartList}}, function(err, entry){
        if (err)
          res.send(err);
        res.json(entry);    
    });
      });

});
};
