const $injector = angular.injector(['ng']);
console.log('## injector', $injector);

$injector.invoke(function ($rootScope, $compile, $document) {
  $rootScope.yourName = 'Angularjs1';
  $compile($document)($rootScope);
  $rootScope.$digest();
});


