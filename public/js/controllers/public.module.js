var app = angular.module('app', [
	'Services',
	'ui.router',
	'LocalStorageModule'
]);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/login');

	$stateProvider
	.state('login', {
		url: '/login',
		templateUrl: '../public/views/login.html',
		controller: 'LoginCtrl'
	});

	$stateProvider
	.state('chat', {
		url: '/chat',
		templateUrl: '../public/views/chat.html',
		controller: 'MessageCtrl'
	});
}]);
