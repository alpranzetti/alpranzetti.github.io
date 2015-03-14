var myApp = angular.module('myApp', ['ngRoute']);

myApp.config (function($routeProvider){
    //set routes 
    $routeProvider
            .when('/',{
                
                templateUrl: 'home.html',
                controller: 'Controller1'
            })
           .when('/MoviesDetails',{
                
                templateUrl: 'Moviedetails.html'
            })
        .otherwise ({
            redirecTo:'/home'
            });
                    
});

        myApp.controller ('Controller1', function($scope,$http){
            
            $http.get('MoviesJson.json').success(function(data){
                $scope.Movies = data; 
            });
            
              $scope.setOrder = function (order) {
        $scope.order = order;
                    };
            
        });
        

