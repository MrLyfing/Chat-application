angular.module('app')
.controller('MessageCtrl', ['ServicesUser', '$scope', '$interval', function(ServicesUser, $scope, $interval) {
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
	
	/*
	$scope.getMessages();
	$interval($scope.getMessages, 500);*/
}]);