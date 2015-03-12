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
		ServicesUser.createMessage($scope.text_input).then(function(data) {
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
		$scope.stop();
		ServicesUser.remove('auth');
		ServicesUser.remove('username');
		$location.path('/login');
	};

	$scope.start = function() {
		$scope.stop();
		promise = $interval($scope.getMessages, 500);
	};

	$scope.stop = function() {
		$interval.cancel(promise);
	};

	$scope.get_auth_users = function() {
		ServicesUser.get_auth_users().then(function(data) {
			$scope.auth_users = data.data;

			console.log(data);
		}).catch(function(data) {
			console.log(data);
		});
	};

	$scope.get_auth_users();

	$scope.start();
}]);