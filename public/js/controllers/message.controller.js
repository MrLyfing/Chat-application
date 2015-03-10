angular.module('app')
.controller('MessageCtrl', ['ServicesUser', '$scope', '$interval', '$location', function(ServicesUser, $scope, $interval, $location) {
	var promise;
	$scope.text_input = "";

	$scope.getMessages = function() {
		ServicesUser.getMessages().then(function(data) {
			$scope.messages = data.data;

			console.log(data);
		}).catch(function(data) {
			console.log(data)
		});
	};

	$scope.createMessage = function() {
		if ($scope.text_input == "")
			return;
		ServicesUser.createMessage($scope.text_input, ServicesUser.getStorage('username')).then(function(data) {
			$scope.text_input = "";

			console.log(data);
		}).catch(function(data) {
			console.log(data);
		});
	};

	$scope.login = function() {
		ServicesUser.login($scope.username, $scope.password).then(function(data) {
			console.log(data);
		}).catch(function(data) {
			console.log(data);
		});
	};

	$scope.logout = function() {
		ServicesUser.logout().then(function(data) {
			$scope.stop();
			ServicesUser.removeStorage('auth');
			ServicesUser.removeStorage('username');
			$location.path('/login');

			console.log(data);
		}).catch(function(data) {
			console.log(data);
		});
	};

	$scope.start = function() {
		$scope.stop();
		promise = $interval($scope.getMessages, 500);
	};

	$scope.stop = function() {
		$interval.cancel(promise);
	};

	$scope.start();

}]);