/**
 * Created by lap00344 on 1/7/17.
 */
define([
    'backbone',
    'models/users/list'
], function (Backbone, userListModels) {
    var collection = Backbone.Collection.extend({
        model: userListModels
    });

    return collection;
});