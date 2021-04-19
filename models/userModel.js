var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({

    uid:{
        type:String,
        unique:true
    },
    username:{
        type:String,
        unique:true
    },

    mobileNumber:{
        type:String
    }

})

module.exports = mongoose.model('User', UserSchema);