
var stateAndCityModel = require('../model/stateAndCity');
var stateAndCitySchema=stateAndCityModel.getstateAndCityModelSchema();
var ObjectId = require('mongodb').ObjectID;


exports.getAllcity = function (req, res) {
    stateAndCitySchema.find({}).exec(function (err, collection) {
        res.send(collection);
    })
};
exports.addDefaultCity = function (req, res) {
   
    var cityData = { state: 'Telengana',
                             cityList: ['Hyderabad','Vijawada'],
                            };
 
  var id = cityData._id;
  
  var userCrendatialToUpdate = {};
  userCrendatialToUpdate = Object.assign(userCrendatialToUpdate, cityData);
  delete userCrendatialToUpdate._id;
  console.log(userCrendatialToUpdate);
  var query = { '_id': ObjectId(id) };
  stateAndCitySchema.findOneAndUpdate(query, userCrendatialToUpdate, { upsert: true }, function (err, doc) {
    if (err)
      return res.send(500, { error: err });
    else {
      return res.send("succesfully saved");
    }
  });
   
};
exports.addOrUpdatestate = function (req, res) {
    var cityData = req.body;
    
 
  var id = cityData._id;
  
  var userCrendatialToUpdate = {};
  userCrendatialToUpdate = Object.assign(userCrendatialToUpdate, cityData);
  delete userCrendatialToUpdate._id;
  console.log(userCrendatialToUpdate);
  var query = { '_id': ObjectId(id) };
  stateAndCitySchema.findOneAndUpdate(query, userCrendatialToUpdate, { upsert: true }, function (err, doc) {
    if (err)
      return res.send(500, { error: err });
    else {
      return res.send("succesfully saved");
    }
  });
   
};
exports.removeSpecificState = function (req, res) {
    
  var id = req.query._id;
  var query = { '_id': ObjectId(id) };
 
  stateAndCitySchema.remove(query, function(err, affected, resp) {
      if (err)
      return res.send(500, { error: err });
  else {
      return res.send("succesfully saved data.");
  }
  });
};
// exports.getSingleUser = function (req, res) {
//     UserModelSchema.findOne({ email: req.query.email }).exec(function (err, obj) {
//         res.send(obj);
//     })
// };