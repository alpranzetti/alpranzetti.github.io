var myApp = angular.module('myApp', ['ngRoute']);

myApp.config (function($routeProvider){
    //set routes 
    $routeProvider
            .when('/',{
                
                templateUrl: 'home.html',
                controller: 'Controller1'
            })
           .when('/:MovieTitle',{
                
                templateUrl: 'Moviedetails.html',
                 controller: 'MovieDetail'
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
        

myApp.controller('MovieDetail', function($scope,$routeParams,$http, $window){
    
    $scope.Title = $routeParams.MovieTitle; 
    
    $http.get('MoviesJson.json').success(function(data){
        
        $scope.movie = data.filter(function(entry){
            
            return entry.Title === $scope.Title; 
         })[0];
           
        
           
    });
    
    
    $scope.openimdb = function() {
    $window.open( $scope.movie.Imdb);
      };   
       
   $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };
    
    $scope.toggle2 = function() {
        $scope.myVar2 = !$scope.myVar2;
    };
});

angular.module('myApp').config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['**']);
});
   
        
 


        

