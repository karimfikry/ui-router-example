var devTraining = angular.module('devTraining', ['ui.router']);

devTraining.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/nested');
    
    $stateProvider
        .state('nested', {
            url: '/nested',
            templateUrl: 'partial-nested.html'
        })
        
        .state('nested.list', {
            url: '/list',
            templateUrl: 'partial-nested-list.html',
            controller: 'listController'
        })
        
        .state('nested.paragraph', {
            url: '/paragraph',
            templateUrl: 'partial-nested-paragraph.html',
            controller: 'paragraphController'
        })
        
        .state('multi', {
            url: '/multi',
            views: {
                '': { templateUrl: 'partial-multi.html' },
                'anotherparagraph@multi': { templateUrl: 'partial-multi-paragraph.html' },
                'dashboardcontent@multi': {
                    templateUrl: 'dashboard-data.html',
                    controller: 'dashboardController'
                }
            }
        });
});

devTraining.controller('listController', function($scope) {
    $scope.list = ['Mark', 'Sam', 'Spencer'];
});

devTraining.controller('paragraphController', function($scope) {
    $scope.paragraph = 'Hey! It is angular panels training!';
});

devTraining.controller('dashboardController', function($scope) {
   
    $scope.staff = [
        {
            name: 'Calls',
            value: 3
        },
        {
            name: 'Staff Closing %',
            value: '200.0%'
        },
        {
            name: 'Appointments',
            value: 4
        },
        {
            name: 'Call Scoring',
            value: '57%'
        }
    ];
    
});