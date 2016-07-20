/**
 * Created by Canon on 2016/7/4.
 */
'use strict';

require
    .config({
        vaseUrl: 'lib',
        paths:{
            "angular": "bower_components/angular/angular.min",
            "ngAnimate":"bower_components/angular-animate/angular-animate.min",
            "angular-bootstrap":"bower_components/angular-bootstrap/ui-bootstrap.min",
            "angular-bootstrap-tpls":"bower_components/angular-bootstrap/ui-bootstrap-tpls.min",
            "angular-loader":"bower_components/angular-loader/angular-loader.min",
            "angular-mocks":"bower_components/angular-mocks/angular-mocks",
            "angular-resource":"bower_components/angular-resource/angular-resource.min",
            "angular-route":"bower_components/angular-route/angular-route.min",
            "angular-simple-logger":"bower_components/angular-simple-logger/dist/angular-simple-logger.min",
            "angular-ui-router":"bower_components/angular-ui-router/release/angular-ui-router.min",
            "angularAMD":"bower_components/angularAMD/angularAMD.min",
            "ngload": "bower_components/angularAMD/ngload",
            "bootstrap":"bower_components/bootstrap/dist/js/bootstrap.min",
            "jquery":"bower_components/jquery/jquery.min",
            "sanitize":"bower_components/angular-sanitize/angular-sanitize.min",
            "lodash":"bower_components/lodash/dist/lodash.min",
            "yaml":"bower_components/js-yaml/dist/js-yaml",
            "mockjs":"bower_components/mockjs/dist/mock-min"

            // services
            // "myService":"components/services/services"
        },
        shim:{
            // angular
            "angular": { exports: "angular" },
            "ol":{ exports: "ol"},
            // angular-ui
            "angular-ui-router": ["angular"],

            // angularAMD
            "angularAMD": ["angular"],
            "ngload": ["angularAMD"],

            // ngAnimate
            "ngAnimate":{ exports: 'ngAnimate', deps: ['angular'],
            "yaml" :{ export: "yaml"},
            "mockjs":{export: "mockjs"}
            }
        }
    });

define(["angular", "angularAMD", "angular-ui-router"], function (angular, angularAMD){
    // security hehavior
    // console.log = function() {}

    // module
    var app = angular.module("ngExamples", ["ui.router"]);

    app.config(function($stateProvider, $urlRouterProvider) {
            // route angular-ui-router
            $stateProvider
                .state("main", angularAMD.route({
                    url: "/main",
                    templateUrl: "./view/pages/main/main.html",
                    controller:'MainController',
                    controllerUrl: "view/pages/main/main"
                }))
                .state("test1", angularAMD.route({
                url: "/test1",
                templateUrl: "./view/pages/test1/test1.html",
                controller:'T1Controller',
                controllerUrl: "view/pages/test1/test1"
                }))
                .state("test2", angularAMD.route({
                    url: "/test2",
                    templateUrl: "./view/pages/test2/test2.html",
                    controller:'T2Controller',
                    controllerUrl: "view/pages/test2/test2"
                }))
                .state("test3", angularAMD.route({
                    url: "/test3",
                    templateUrl: "./view/pages/test3/test3.html",
                    controller:'T3Controller',
                    controllerUrl: "view/pages/test3/test3"
                }))
        .state("test4", angularAMD.route({
            url: "/test4",
            templateUrl: "./view/pages/test4/test4.html",
            controller:'T4Controller',
            controllerUrl: "view/pages/test4/test4"
        }));

            // default
            $urlRouterProvider.otherwise("/main");
        }
    );

    // bootstrap
    return angularAMD.bootstrap(app);

});

