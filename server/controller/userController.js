
var userModel = require('../model/userLogin');
var UserModelSchema=userModel.getUserModelSchema();
var ObjectId = require('mongodb').ObjectID;

exports.addDefaultUser = function (req, res) {
    var userCrendatialData = { 
    userEmailId: 'pinaki1.best@gmail.com', 
    password: '1234',                      
    createdDateTime: new Date() , 
    location:'India',
    FirstName: 'pinaki',
    LastName: 'Mohapatra',
    Address: 'lingampally',
    zipCode: '500032',
    city: 'Hyterabad',
    state: 'Telengana',
    phone:'123456789'
};
 
  var id = userCrendatialData._id;
  
  var userCrendatialToUpdate = {};
  userCrendatialToUpdate = Object.assign(userCrendatialToUpdate, userCrendatialData);
  delete userCrendatialToUpdate._id;
  console.log(userCrendatialToUpdate);
  var query = { '_id': ObjectId(id) };
  UserModelSchema.findOneAndUpdate(query, userCrendatialToUpdate, { upsert: true }, function (err, doc) {
    if (err)
      return res.send(500, { error: err });
    else {
      return res.send("succesfully saved");
    }
  });
   
};
exports.addOrUpdateUser=  function (req, res) {
    var userData = req.body;
    var id = userData._id;
    console.log('student _id : ' + userData._id);
    var userToUpdate = {};
    userToUpdate = Object.assign(userToUpdate, userData);
    delete userToUpdate._id;
    console.log(userToUpdate);
    var query = { '_id': ObjectId(id) };
    userToUpdate.createdDateTime=new Date();
      UserModelSchema.findOneAndUpdate(query, userToUpdate, { upsert: true }, function (err, doc) {
        if (err)
            return res.send(500, { error: err });
        else {
            return res.send("succesfully saved");
        }
    });
};

// Remove  specific User
exports.removeSpecificUser = function (req, res) {
    
    var id = req.query._id;
    var query = { '_id': ObjectId(id) };
    UserModelSchema.remove(query, function(err, affected, resp) {
        if (err)
        return res.send(500, { error: err });
    else {
        return res.send("succesfully saved data.");
    }
    });
};

// update specific Columns
exports.updateSpecificColumns = function (req, res) {
    var userData = req.body;
    var id = userData._id;
    var query = { '_id': ObjectId(id) };
    delete userData._id;
    UserModelSchema.update(query, userData, function(err, affected, resp) {
        if (err)
        return res.send(500, { error: err });
    else {
        return res.send("succesfully saved");
    }
    });
};

// get specific Columns
exports.getSpeCIficColumns = function (req, res) {
    UserModelSchema.find({}).select('userEmailId  location  password -_id').exec(function (err, collection) {
        res.send(collection);
    })
};

// get Single User
exports.getSingleUser = function (req, res) {
    UserModelSchema.findOne({ userEmailId: req.query.userEmailId }).select('userEmailId  location  -_id').exec(function (err, obj) {
        res.send(obj);
    })
};
// get all users
exports.getAllUsers = function (req, res) {
    UserModelSchema.find({}).exec(function (err, collection) {
        res.send(collection);
    })
};
// Remove Table
exports.deleteUserTable = function (req, res) {
    UserModelSchema.remove().exec(function (err, collection) {
        res.send("romoved");
    })
};

