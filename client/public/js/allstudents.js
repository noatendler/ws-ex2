var showApp = angular.module('showApp',[]);

showApp.controller('studentCtrl',['$scope','$http',function($scope,$http) {
     $http.get("https://ws-noa-ex2.herokuapp.com/showall").success(function(data){
        $scope.allstudents = data; 
        console.log(data);
    });
}]);
