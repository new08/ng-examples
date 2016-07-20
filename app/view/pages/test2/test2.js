/**
 * Created by Canon on 2016/7/6.
 */

define(['app',
    'angular',
    'mockjs'], function (app) {
    'use strict';
    var mock = require('mockjs');
    mock.mockjs(app);

    app.controller('T2Controller',['$scope','$http', function($scope, $http) {
        console.log("init test2 page");
    }]);
});