
var mongoose = require("mongoose");
var ObjectId = require('mongodb').ObjectID;
var jwt = require('jsonwebtoken');
var userLoginSchema = mongoose.Schema({
  userEmailId: {type: String, unique: true },
  password: String,
  createdDateTime: Date ,
  location:String,
  FirstName: {type: String },
  LastName: {type: String },
  Address: {type: String },
  zipCode: {type: String },
  city: {type: String },
  state: {type: String },
  phone: {type: String }
});
var userCrendatial = mongoose.model('userLogin', userLoginSchema);
exports.getUserModelSchema = function (req, res) {
  return userCrendatial;
};



