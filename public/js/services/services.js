angular.module('Services', [])
.factory('ServicesUser',['$http', '$q', 'localStorageService', function($http, $q, localStorageService) {
	var ServicesUser = {};

	ServicesUser.set = function(key, value) {
		return localStorageService.set(key, value);
	};

	ServicesUser.get= function(key) {
		return localStorageService.get(key);
	};

	ServicesUser.remove = function(key) {
		return localStorageService.remove(key);
	};

	ServicesUser.isLogged = function() {
		if (localStorageService.get('auth') == null || !localStorageService.get('auth'))
			return false;
		return true;
	}

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

	ServicesUser.create_user = function(username_, password_) {
	};

	ServicesUser.get_auth_users = function() {
		var deffered = $q.defer();
		var req = {
			method : 'GET',
			url : 'api/user/get_auth_users'
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
	return ServicesUser;
}]);