'use strict';


module.exports = function(app) {

var user = require('./controller');

app.route('/rest/v1/users')
    .get(user.list_users);

app.route('/rest/v1/users/:uid')
    .get(user.retrieve_user);

app.route('/rest/v1/users/:uid/cart')
    .get(user.update_cart)
    .put(user.retrieve_cart);

app.route('/rest/v1/users/:uid/products')
    .get(user.list_user_products);

app.route('/rest/v1/products')
    .get(user.list_products)

};


 


