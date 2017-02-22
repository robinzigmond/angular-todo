angular.module('TodoDirective',[]).directive('todoTable', function() {
  return {
    restrict: 'EA',    // EA -> element/attribute
    templateUrl: 'templates/directives/todo-table.html'
  };
});

angular.module('LoggedInDirective', []).controller('loggedInController', function($scope, store) {
	$scope.username = store.get("username");	
})
.directive('showIfLoggedIn', function() {
	return {
		restrict: 'EA',
		templateUrl: 'templates/directives/show-if-logged-in.html'
	};
});