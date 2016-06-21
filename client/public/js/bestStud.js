var showBestApp = angular.module('showBestApp',['ngRoute'])
.config(function ($routeProvider, $locationProvider) {
        // configure the routing rules here
        $routeProvider.when('/getStusdentById.html/', {
            controller: 'bestCtrl'
        });
             $locationProvider.html5Mode({
              enabled: true,
              requireBase: false
            });
    })

showBestApp.controller('bestCtrl',['$scope','$http', '$location',function($scope,$http, $location) {
     $http.get("http://localhost:3000/getbest/"+$location.search().year).success(function(data){
        $scope.bestStud = data; 
        console.log(data);
    });
}]);