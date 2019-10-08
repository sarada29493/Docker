

var userController = require('../controller/userController');
var stateAndCityController = require('../controller/stateAndCityController');



module.exports = function (app, dir) {
    app.get('/deleteUserTable', userController.deleteUserTable);
    app.get('/addDefaultUser', userController.addDefaultUser);
    app.get('/getAllUsers', userController.getAllUsers);
    app.post('/addOrUpdateUser', userController.addOrUpdateUser);
    app.get('/getSpeCIficColumns', userController.getSpeCIficColumns);
    app.post('/updateSpecificColumns', userController.updateSpecificColumns);
    app.get('/removeSpecificUser', userController.removeSpecificUser);
    app.get('/getSingleUser', userController.getSingleUser);
    
    app.get('/addDefaultCity', stateAndCityController.addDefaultCity);
    app.get('/getAllcity', stateAndCityController.getAllcity);
    app.post('/addOrUpdatestate', stateAndCityController.addOrUpdatestate);
    app.get('/removeSpecificState', stateAndCityController.removeSpecificState);
}
