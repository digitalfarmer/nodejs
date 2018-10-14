'use strict';

module.exports = function (app) {
    var todoList = require('./controller');
    
    //default home
    app.route('/').get(todoList.index);
    //get all data users
    app.route('/users').get(todoList.users);
    //get user with id
    app.route('/users/:user_id').get(todoList.findUsers);
    //save users
    app.route('/users').post(todoList.createUsers);
    //update users
    app.route('/users').put(todoList.updateUsers);
    //delete users
    app.route('/users').delete(todoList.deleteUsers);
}