/**
 * Created by lap00344 on 1/7/17.
 */
define([
    'backbone'
], function (Backbone) {
    var model = Backbone.Model.extend({
        defaults: {
            name:  "name",
            age:    1
        }
    });

    return model;
});