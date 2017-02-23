angular.module('TodoDirective',[]).directive('todoTable', function() {
  return {
    restrict: 'EA',    // EA -> element/attribute
    templateUrl: 'templates/directives/todo-table.html'
  };
});

angular.module('NavbarDirective', []).directive('navbar', function() {
  return {
  	restrict: 'EA',
  	templateUrl: 'templates/directives/navbar.html'
  };
});