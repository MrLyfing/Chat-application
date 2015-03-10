angular.module('Services', [])
.factory('ServicesUser',['$http', '$q', 'localStorageService', function($http, $q, localStorageService) {
	var ServicesUser = {};

	ServicesUser.setStorage = function(key, value) {
		return localStorageService.set(key, value);
	};

	ServicesUser.getStorage = function(key) {
		return localStorageService.get(key);
	};

	ServicesUser.removeStorage = function(key) {
		return localStorageService.remove(key);
	};

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

	ServicesUser.createMessage = function(text_, sender_) {
		var deffered = $q.defer();
		var req = {
			method : 'POST',
			url : 'api/messages',
			data : {
				text : text_,
				sender : sender_
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
		var deffered = $q.defer();
		var req = {
			method : 'POST',
			url : 'api/user/login',
			data : {
				username : username_,
				password : password_
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

	ServicesUser.logout = function() {
		var deffered = $q.defer();
		var req = {
			method : 'GET',
			url : 'api/user/logout'
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
	}

	ServicesUser.create_user = function(username_, password_) {

	};

	return ServicesUser;
}]);