/**
 * Created by Canon on 2016/7/6.
 */

define(['app',
    'angular',
    'yaml'], function (app) {
    'use strict';

    app.controller('T1Controller',['$scope','$http', function($scope, $http) {
        console.log("init test1 page");
        var yaml = require('yaml');
        $scope.doc = yaml.load('.greeting: hello\nname: world');

    }]);
});