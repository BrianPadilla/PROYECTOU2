var mongoose = require('mongoose');
var pattern = new RegExp('@');
module.exports = mongoose.Schema({

nc: {
    type: String,
    required : true
},

name: {
    type: String,
    required: true
},

career: {
    type: String,
    required: true
},

grade: {
    type: Number,
    required: true
},

email: {
    type: String,
    match: pattern
},

sendmail: {
    type: Boolean,
    default: false
}


});