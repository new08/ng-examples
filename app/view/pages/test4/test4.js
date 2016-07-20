/**
 * Created by Canon on 2016/7/12.
 */
define(['app',
    'angular'], function (app) {
    'use strict';
    app.controller('T4Controller',['$scope', function($scope) {
        console.log("init test4 scope");
        $scope.person = {greeted: false};

    }]);
    app.controller('T4_1Controller',['$scope', function($scope) {
        console.log("init test4.1 scope");
        $scope.sayHello = function() {
            $scope.person.name = 'Ari Lerner';
        };
    }]);
});