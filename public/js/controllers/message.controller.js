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

	$interval(function() {
		$scope.getMessages();
	}, 3000);
}]);