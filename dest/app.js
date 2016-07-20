/**
 * Created by Canon on 2016/7/4.
 */
'use strict';

require
    .config({
        paths:{
            "angular": "lib/angular.min",
            "ngAnimate": "lib/angular-animate.min",
            "angular-bootstrap": "lib/ui-bootstrap.min",
            "angular-bootstrap-tpls": "lib/ui-bootstrap-tpls.min",
            "angular-loader": "lib/angular-loader.min",
            "angular-mocks": "lib/angular-mocks",
            "angular-resource": "lib/angular-resource.min",
            "angular-route": "lib/angular-route.min",
            "angular-simple-logger": "lib/bngular-simple-logger.min",
            "angular-ui-router": "lib/angular-ui-router.min",
            "angularAMD": "lib/angularAMD.min",
            "ngload": "lib/ngload",
            "bootstrap": "lib/bootstrap.min",
            "jquery": "lib/jquery.min",
            "sanitize": "lib/angular-sanitize.min",
            "lodash": "lib/lodash.min",
            "yaml": "lib/js-yaml",
            "mockjs": "lib/mock-min"

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
                    controllerUrl: "view/pages/main/main.min"
                }))
                .state("test1", angularAMD.route({
                url: "/test1",
                templateUrl: "./view/pages/test1/test1.html",
                controller:'T1Controller',
                controllerUrl: "view/pages/test1/test1.min"
                }))
                .state("test2", angularAMD.route({
                    url: "/test2",
                    templateUrl: "./view/pages/test2/test2.html",
                    controller:'T2Controller',
                    controllerUrl: "view/pages/test2/test2.min"
                }))
                .state("test3", angularAMD.route({
                    url: "/test3",
                    templateUrl: "./view/pages/test3/test3.html",
                    controller:'T3Controller',
                    controllerUrl: "view/pages/test3/test3.min"
                }))
        .state("test4", angularAMD.route({
            url: "/test4",
            templateUrl: "./view/pages/test4/test4.html",
            controller:'T4Controller',
            controllerUrl: "view/pages/test4/test4.min"
        }));

            // default
            $urlRouterProvider.otherwise("/main");
        }
    );

    // bootstrap
    return angularAMD.bootstrap(app);

});

