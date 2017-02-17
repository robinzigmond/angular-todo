angular.module('TodoDirective', []).directive('todotable', function() {
	return {
		restrict: 'E', // E -> element
		templateUrl: 'templates/directives/todo-table.html'
	};
});