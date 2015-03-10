angular.module('app')
.controller('LoginCtrl', ['ServicesUser', '$scope', '$location', function(ServicesUser, $scope, $location) {
	$scope.login = function() {
		ServicesUser.login($scope.username, $scope.password).then(function(data) {
			ServicesUser.setStorage('auth', true);
			ServicesUser.setStorage('username', $scope.username);
			$scope.username = '';
			$scope.password = '';
			$location.path('/chat');

			console.log(data);
		}).catch(function(data) {
			console.log(data);
		});
	};
}]);