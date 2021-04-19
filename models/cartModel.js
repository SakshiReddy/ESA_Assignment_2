const { Decimal128 } = require('bson');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var CartSchema = new Schema({
    
    uid: {
      type: String,
      minlength: 1,
      maxlength: 16
      
    },
    productId: {
        type: String,
        minlength: 1,
        maxlength: 16,
        unique : true
        
      },
    productName: {
    type: String,
    minlength: 1,
    maxlength: 16    
    },
    amount: {
      type: Decimal128,
      minlength: 1,
      maxlength: 16     
      },

    quantity: {
      type: Number,
      minlength: 1,
      maxlength: 16      
      },
    
    
    
  });

module.exports = mongoose.model('Cart', CartSchema);