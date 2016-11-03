var webTemp=angular.module('webStore.templates', ['ngRoute']);

//Configure Routes
webTemp.config(function($routeProvider){
  $routeProvider
  .when("/templates",{
    templateUrl:"templates/template.html",
    controller:"TemplateController"
  })
  .when("/templates/:templateId",{
    templateUrl:"templates/templateDetails.html",
    controller:"TemplateDetailsController"
  })
  
  .otherwise({redirectTo:"/main"})
});

//Controllers
webTemp.controller("TemplateController",['$scope','$http',function($scope,$http){
  $http.get('template.json').then(function(response){
	 // console.log(response);
	  //console.log(response.data);
	  $scope.templateTypes=response.data
  });
  
}]);

webTemp.controller("TemplateDetailsController",['$scope','$http','$routeParams','$filter',function($scope,$http,$routeParams,$filter){
  var tempId=$routeParams.templateId;
	$http.get('template.json').then(function(res){
	  $scope.templateSelect=$filter('filter')(res.data,function(d){
		  return d.id==tempId;
	  });
		//console.log(res);
		//console.log(res.data);
		//console.log($scope.templateSelect);
		
  });
  
}]);