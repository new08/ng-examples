/**
 * Created by Canon on 2016/7/4.
 */
define(['app',
    'ngAnimate',
    'angular-bootstrap',
    'angular-bootstrap-tpls',
    'angular-resource',
    'angular-ui-router',
    'jquery'], function (app) {
    'use strict';

    app.controller('MainController',['$scope','$state', function($scope, $state) {
        console.log("init main page");

        $('[data-toggle="offcanvas"]').click(function () {
            $('.row-offcanvas').toggleClass('active')
        });

        $scope.jump = function(subPath){
            $sate.go(subPath);
        }

    }]);


});