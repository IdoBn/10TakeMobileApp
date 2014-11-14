(function() {

	function Users(URL, http, log, ionicLoading, q) {
		this.find = function(id) {
			ionicLoading.show({
	    	template: 'Loading...'
	  	});

	  	var defer = q.defer();

			http.get(URL + '/users/' + id)
				.success(function(data) {
					log.debug('users find ', data);
					defer.resolve(data);
					ionicLoading.hide();
				})
				.error(function(data) {
					log.error('users find ', data);
					defer.reject(data);
					ionicLoading.hide();
				});

			return defer.promise;
		};
	}
		Users.$inject = ['URL', '$http', '$log', '$ionicLoading', '$q'];

	angular.module('10take.services')
		.service('Users', Users)

}());