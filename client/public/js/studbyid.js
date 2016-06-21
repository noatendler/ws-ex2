var showidApp = angular.module('showidApp',['ngRoute'])
.config(function ($routeProvider, $locationProvider) {
        // configure the routing rules here
        $routeProvider.when('/getStusdentById.html/', {
            controller: 'studentidCtrl'
        });
             $locationProvider.html5Mode({
              enabled: true,
              requireBase: false
            });
    })

showidApp.controller('studentidCtrl',['$scope','$http', '$location',function($scope,$http, $location) {
    console.log($location.search().id);
     $http.get("http://localhost:3000/getbyid/"+$location.search().id).success(function(data){
        $scope.studbyid = data; 
        console.log(data);
    });
}]);