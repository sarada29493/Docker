
var mongoose = require("mongoose");
var ObjectId = require('mongodb').ObjectID;
var jwt = require('jsonwebtoken');
var stateAndCitySchema = mongoose.Schema({
  state: {type: String, unique: true },
  cityList:  [
    {
        
                "type": String
  
    }


  ]
});
var stateAndCityModel = mongoose.model('stateAndCity', stateAndCitySchema);

exports.getstateAndCityModelSchema = function (req, res) {
  return stateAndCityModel;
};



