(function() {

	function Items(URL, http, q, ionicLoading, log) {
		this.all = function() {
			ionicLoading.show({
	    	template: 'Loading...'
	  	});

	  	var defer = q.defer();

			http.get(URL + '/items')
				.success(function(data) {
					log.debug('items all ', data);
					defer.resolve(data);
					ionicLoading.hide();
				})
				.error(function(data) {
					log.error('items all ', data);
					defer.reject(data);
					ionicLoading.hide();
				});

			return defer.promise;
		};
	}
		Items.$inject = ['URL', '$http', '$q', '$ionicLoading', '$log'];

	angular.module('10take.services')
		.service('Items', Items);

}());