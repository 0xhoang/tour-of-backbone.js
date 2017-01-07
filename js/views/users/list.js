/**
 * Created by lap00344 on 1/7/17.
 */

define([
    'jquery',
    'underscore',
    'backbone',
    'collections/users/list',
    'text!/templates/users/list.html'
], function ($, _, Backbone, userListCollection, userListTemplate) {
    var view = Backbone.View.extend({
        el: '#container',
        initialize: function () {
          this.collection = new userListCollection();
        },
        render: function () {
            this.collection.add([
                {
                    name: 'Hello',
                    age: 20
                },
                {
                    name: 'Hello 2',
                    age: 21
                }
            ]);

            var compileTemplate = _.template(userListTemplate);
            this.$el.html(compileTemplate({data: this.collection.toJSON()}));
        }
    });

    return view;
});