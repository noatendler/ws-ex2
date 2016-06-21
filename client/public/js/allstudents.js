var showApp = angular.module('showApp',[]);

showApp.controller('studentCtrl',['$scope','$http',function($scope,$http) {
     $http.get("http://localhost:3000/showall").success(function(data){
        $scope.allstudents = data; 
        console.log(data);
    });
}]);
