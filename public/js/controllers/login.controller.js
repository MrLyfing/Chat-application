angular.module('app')
.controller('LoginCtrl', ['ServicesUser', '$scope', '$location', function(ServicesUser, $scope, $location) {
	$scope.login = function() {
		ServicesUser.login($scope.username, $scope.password).then(function(data) {
			ServicesUser.remove('auth');
			ServicesUser.remove('username');
			ServicesUser.set('auth', true);
			ServicesUser.set('username', $scope.username);
			$scope.username = '';
			$scope.password = '';
			$location.path('/chat');

			console.log(data);
		}).catch(function(data) {
			console.log(data);
		});
	};

	/* Redirect to the chat page if already logged in */
	if (ServicesUser.isLogged())
		$location.path('/chat');
}]);