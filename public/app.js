(function () {
    'use strict';

    angular.module('app', [])

    .controller('MainController', function ($scope) {
        $scope.name = 'Alenaaaa';
    });

})();







// (function() {

//     var app = angular.module('app', ['ngRoute']);

//     app.config(function($routeProvider, $locationProvider) {

//         $locationProvider.html5Mode(true);

//         $routeProvider.when('/', {
//             templateUrl: './templates/main.html',
//             controller: 'MainController',
//             controllerAs: 'vm'
//         });

//         $routeProvider.when('/login', {
//             templateUrl: './templates/login.html',
//             controller: 'LoginController',
//             controllerAs: 'vm',
//             access: {
//                 restricted: false
//             }
//         });

//         $routeProvider.when('/register', {
//             templateUrl: './templates/register.html',
//             controller: 'RegisterController',
//             controllerAs: 'vm',
//             access: {
//                 restricted: false
//             }
//         });

//         $routeProvider.when('/polls', {
//             templateUrl: './templates/polls.html',
//             controller: 'PollsController',
//             controllerAs: 'vm',
//             access: {
//                 restricted: false
//             }
//         });

//         $routeProvider.when('/polls/:id', {
//             templateUrl: './templates/polls.html',
//             controller: 'PollsController',
//             controllerAs: 'vm',
//             access: {
//                 restricted: false
//             }
//         });

//         $routeProvider.when('/profile', {
//             templateUrl: './templates/profile.html',
//             controller: 'ProfileController',
//             controllerAs: 'vm',
//             access: {
//                 restricted: true
//             }
//         });

//         $routeProvider.otherwise('/');

//         app.controller('MainController', MainController);

//         function MainController($location, $window) {

//             var vm = this;
//             vm.title = "MainController";
//             console.log('in main ctrl');

//         }

//         app.controller('LoginController', LoginController);

//         function LoginController($location, $window) {

//             var vm = this;
//             vm.title = "LoginController";
//         }

//         app.controller('RegisterController', RegisterController);

//         function RegisterController($location, $window) {

//             var vm = this;
//             vm.title = "RegisterController";
//         }

//         app.controller('ProfileController', ProfileController);

//         function ProfileController($location, $window) {

//             var vm = this;
//             vm.title = "ProfileController";

//         }

//         app.controller('PollsController', PollsController);

//         function PollsController($location, $window) {

//             const vm = this;
//             vm.title = "PollsController";

//         }

//         app.controller('PollController', PollController);

//         function PollController($location, $window) {

//             var vm = this;
//             vm.title = "PollController";

//         }

//     })

// })();