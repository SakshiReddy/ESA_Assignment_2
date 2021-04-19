var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var ProductSchema = new Schema({
    
    productId: {
      type: String,
      minlength: 1,
      maxlength: 16
      
    },
    category: {
        type: String,
        minlength: 1,
        maxlength: 16
        
      },
    productName: {
    type: String,
    minlength: 1,
    maxlength: 16    
    },
    productModel: {
      type: String,
      minlength: 1,
      maxlength: 16   
    },

    price: {
      type: String,
      minlength: 1,
      maxlength: 16     
      },

    availableQuantity: {
      type: String,
      minlength: 1,
      maxlength: 16      
      },
    
    
    
  });

module.exports = mongoose.model('Product', ProductSchema);