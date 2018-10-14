'use strict';

module.exports = function (app) {
    var todoList = require('./controller');
    
    app.route('/').get(todoList.index);
    app.route('/users').get(todoList.users);
    app.route('/users/:user_id').get(todoList.findUsers);
    //save users
    app.route('/users').post(todoList.createUsers);
    //update users
    app.route('/users').put(todoList.updateUsers);
    //delete users
    app.route('/users').delete(todoList.deleteUsers);
}