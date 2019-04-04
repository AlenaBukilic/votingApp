(function () {
    'use strict';

    angular.module('VotingApp', ['ui.router']);

    angular.module('VotingApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider']
    function RoutesConfig($stateProvider, SurlRouterProvider) {

        // redirect to main if no other url matches
        $urlRouterProvider.otherwise('templates/main');

        // setup UI states
        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'templates/main.html'
            })

            .state('test', {
                url: '/test',
                template: '<div>This is Test</div>'
            });

    }



    // .controller('MainController', function ($scope) {
    //     $scope.name = 'Alenaaaa';
    // });

})();
