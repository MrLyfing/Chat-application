var app = angular.module('app', [
	'Services',
	'ui.router'
]);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/login');

	$stateProvider
	.state('login', {
		url: '/login',
		templateUrl: '../public/views/login.html'
	});

	$stateProvider
	.state('chat', {
		url: '/chat',
		templateUrl: '../public/views/chat.html',
		controller: 'MessageCtrl'
	});
}]);
