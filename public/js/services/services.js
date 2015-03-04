angular.module('Services', [])
.factory('ServicesUser',['$http', '$q', function($http, $q) {
	var ServicesUser = {};

	ServicesUser.getMessages = function() {
		var deffered = $q.defer()
		var req = {
			method : 'GET',
			url : 'api/messages'
		};
		$http(req).success(function(data_, status_) {
			var wrap_info = {
				data : data_,
				status : status_
			};
			deffered.resolve(wrap_info);
		}).error(function(data_, status_) {
			var wrap_info = {
				data : data_,
				status : status_
			};
			deffered.reject(wrap_info);
		});

		return deffered.promise;
	};

	ServicesUser.createMessage = function(text_) {
		var deffered = $q.defer();
		var req = {
			method : 'POST',
			url : 'api/messages',
			data : {
				text : text_
			}
		};

		$http(req).success(function(data_, status_) {
			var wrap_info = {
				data : data_,
				status : status_
			};
			deffered.resolve(wrap_info);
		}).error(function(data_, status_) {
			var wrap_info = {
				data : data_,
				status : status_
			};
			deffered.reject(wrap_info);
		});

		return deffered.promise;
	};

	ServicesUser.login = function(username_, password_) {


	};

	ServicesUser.create_user = function(username_, password_) {

	};

	return ServicesUser;
}]);