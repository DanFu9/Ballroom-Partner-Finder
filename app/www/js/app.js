/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'router'
], function ($, _ , Backbone, Router) {
    'use strict';

    var app = {
        // Application Constructor
        initialize: function() {
            this.bindEvents();

            var contentContainer = $('#partner-finder-app');

            var router = new Router({
                contentContainer: contentContainer
            });

            Backbone.history.start();
        },
        // Bind Event Listeners
        //
        // Bind any events that are required on startup. Common events are:
        // 'load', 'deviceready', 'offline', and 'online'.
        bindEvents: function() {
            document.addEventListener('deviceready', this.onDeviceReady, false);
        },
        // deviceready Event Handler
        //
        // The scope of 'this' is the event. In order to call the 'receivedEvent'
        // function, we must explicitly call 'app.receivedEvent(...);'
        onDeviceReady: function() {
            var headerContainer = $('#partner-finder-header');
            var contentContainer = $('#partner-finder-content');
            var footerContainer = $('#partner-finder-footer');

            var router = new Router({
                headerContainer: headerContainer,
                contentContainer: contentContainer,
                footerContainer: footerContainer
            });

            Backbone.history.start();
        }
    };

    return app;
});
