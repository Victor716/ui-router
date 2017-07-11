'use strict';
// Define `TrialApp` module
var app = angular.module('TrialApp', ['ui.router']);
// Define routers
app.config(function($stateProvider) {
	$stateProvider
	    .state('home', {
		    url: '/home',
		    templateUrl: 'demo2.html',
		    controller: 'MainController'
	    })
	    .state('1', { 
	    	url: '/Page1',
	    	templateUrl: 'nestedViews/htmls/1/Page1.html',
	    	controller: function($scope, $state) {
	    		$scope.change = function() {
	    		$state.go('1.1');
	    		}
	    	}
	    })
	    .state('1.1', {
	    	url: '/Page1.1',
	    	templateUrl: 'nestedViews/htmls/1/childViews/Page1.1.html',
	    	controller: function($scope, $state) {
	    		$scope.change = function() {
	    			$state.go('1.1.1');
	    		}
	    	}
	    })
	    .state('1.1.1', {
	    	url: '/Page1.1.1',
	    	templateUrl: 'nestedViews/htmls/1/childViews/Page1.1.1.html',
	    })
	    .state('2', {
	    	url: '/Page2',
	    	templateUrl: 'nestedViews/htmls/2/Page2.html',
	    	controller: function($scope, $state) {
	    		$scope.transfer = function() {
	    			var id = document.getElementById("id").value;
	    			console.log(id);
	    			$state.go('params',{ID: id});
	    		}
	    	}
	    })
	    .state('3', {
	    	url: '/Page3',
	    	templateUrl: 'nestedViews/htmls/3/Page3.html',
	    	
	    })
	    .state('3.child', {
            url:'/child',
	    	views: {
	    		'A@3' : {
	    			templateUrl:'nestedViews/htmls/3/A.html'
	    		},
	    		'B@3' : {
	    			templateUrl:'nestedViews/htmls/3/B.html'
	    		}
	    	}
	    })
	    .state('3.child1', {
	    	url: '/child1',
	    	views: {
	    		'A@3': {
	    			template: '<h3><strong>A:</strong>View has been changed!</h3>'
	    		},
	    		'B@3': {
	    			template: '<h3><strong>B:</strong>View has been changed!</h3>'
	    		}
	    	}
	    })
	    .state('params', {
	    	url: '/params/:ID',
	    	templateUrl: 'nestedViews/htmls/param.html',
	    	controller: function($scope, $state, $stateParams) {
	    		$scope.index = $stateParams.ID;
	    		$scope.data = [{
	    			            id : 1,
	    			            name : "victor",
	    			            imgSrc: "img/Victor.jpg",
	    			            age:24
	    		                },{
	    		                id : 2,
	    			            name : "angela",
	    			            imgSrc: "img/Angela.jpg",
	    			            age:23
	    		                },{
	    		                id : 3,
	    			            name : "Mark",
	    			            imgSrc: "img/Mark.png",
	    			            age:12
	    		                }];

	    		$scope.exit = function() {
	    			$state.go("2");
	    		}
	    	}
	    })
});
app.controller('MainController', function() {
     //alert("Welcome to nested view demo!");
});
