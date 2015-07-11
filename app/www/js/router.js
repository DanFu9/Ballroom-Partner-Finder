define([
    'jquery',
    'underscore',
    'backbone',
    'views/main',
    'views/profile',
    'views/settings',
    'views/header',
    'collections/Users',
    'models/User'
], function($, _, Backbone,
    MainView,
    ProfileView,
    SettingsView,
    HeaderView,
    UsersCollection,
    UserModel
) {
    'use strict';

    var Router = Backbone.Router.extend({
        initialize: function(options) {
            this.headerContainer = options.headerContainer;
            this.headerView = new HeaderView();
            this.headerView.render();
            this.headerContainer.append(this.headerView.$el);

            this.contentContainer = options.contentContainer;
            this.footerContainer = options.footerContainer;
            this.usersCollection = new UsersCollection();
        },

        routes: {
            '': 'main',
            'profile': 'profile',
            'settings': 'settings'
        },

        setView: function(view) {
            view.render();
            this.contentContainer.empty();
            this.contentContainer.append(view.$el);
        },

        main: function() {
            var self = this;

            var mainView = new MainView({
                collection: self.usersCollection
            });

            $.when(self.usersCollection.fetch()).then(function() {
                self.setView(mainView);
            });
        },

        profile: function() {
            var self = this;

            var mainUser = new UserModel();
            mainUser.url='static/mainUser.json';

            var profileView = new ProfileView({
                user: mainUser
            });

            $.when(mainUser.fetch()).then(function() {
                self.setView(profileView);
            });
        },

        settings: function() {
            var settingsView = new SettingsView();

            this.setView(settingsView);
        }
    });

    return Router;
});