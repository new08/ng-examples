/**
 * Created by Canon on 2016/7/12.
 */
define(['app',
    'angular'], function (app) {
    'use strict';
    app.controller('T3Controller',['$scope','$timeout', function($scope, $timeout) {
        console.log("init test3 page");
        $scope.clock = {
            now: new Date()
        };
        var updateClock = function() {
            $scope.clock.now = new Date()
        };
        setInterval(function() {
            $scope.$apply(updateClock);
        }, 1000);
        updateClock();
    }]);
});