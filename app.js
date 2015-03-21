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
            controller: 'nestedController'
        })
        
        .state('nested.table', {
            url: '/table',
            templateUrl: 'partial-nested-table.html',
            controller: 'nestedController'
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

devTraining.controller('nestedController', function($scope) {
    $scope.list = ['item1', 'item2', 'item3'];
});

devTraining.controller('dashboardController', function($scope) {
   
    $scope.staff = [
        {
            name: 'Entry1',
            value: 3
        },
        {
            name: 'Entry2 %',
            value: '200.0%'
        },
        {
            name: 'Entry3',
            value: 4
        },
        {
            name: 'Entry4',
            value: '57%'
        }
    ];
    
});
