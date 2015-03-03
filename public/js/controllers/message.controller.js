angular.module('app')
.controller('MessageCtrl', ['ServicesUser', '$scope', '$interval', function(ServicesUser, $scope, $interval) {
	$scope.getMessages = function() {
		ServicesUser.getMessages().then(function(data) {
			$scope.messages = data.data;

			console.log(data);
		}).catch(function(data) {
			console.log(data)
		});

	};

	$scope.createMessage = function() {
		ServicesUser.createMessage($scope.text_input).then(function(data) {
			console.log(data);
		}).catch(function(data) {
			console.log(data);
		});
	};

	$scope.getMessages();

	$interval(function() {
		$scope.getMessages();
	}, 500);
}]);