angular.module('TodoApp', ['ngRoute', 'RouteControllers', 'UserService', 'angular-storage', 'TodoService', 'TodoDirective', 'NavbarDirective']);

angular.module('TodoApp').config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider.when('/angular-todo/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	})
	.when('/angular-todo/accounts/register', {
		templateUrl: 'templates/register.html',
		controller: 'RegisterController'
	})
	.when('/angular-todo/accounts/login', {
		templateUrl: 'templates/login.html',
		controller: 'LoginController'
	})
	.when('/angular-todo/accounts/logout', {
		templateUrl: 'templates/logout.html',
		controller: 'LogoutController'
	})
	.when('/angular-todo/todo', {
		templateUrl: 'templates/todo.html',
		controller: 'TodoController'
	}).when('/angular-todo/todo/edit/:id', {
	    templateUrl:'templates/edit-todo.html',
	    controller: 'EditTodoController'
	});
});