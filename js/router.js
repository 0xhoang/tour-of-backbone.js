/**
 * Created by lap00344 on 1/7/17.
 */
define([
    'backbone',
    'views/users/list'
], function (Backbone, userListView) {
    var Router = Backbone.Router.extend({
        routes: {
            "user": "userAction",
            "*actions": "defaultAction"
        }
    });

    var init = function () {
        var router = new Router();

        router.on("route:userAction", function() {
            var view = new userListView();
            view.render();
        });

        router.on('route:defaultAction', function (actions) {
            console.log('No route: ' + actions);
        });

        Backbone.history.start();
    };

    return {
        init: init
    }
});