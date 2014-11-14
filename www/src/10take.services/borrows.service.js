(function() {

	function Borrows(log, http, URL, ionicLoading, q) {
		this.create = function(item_id) {
			ionicLoading.show({
	    	template: 'Loading...'
	  	});

	  	var defer = q.defer();

			http.post(URL + '/borrows', {item_id: item_id})
			.success(function(data) {
				log.debug('borrows create ', data);
				defer.resolve(data);
				ionicLoading.hide();
			})
			.error(function(data) {
				log.error('borrows create ', data);
				defer.reject(data);
				ionicLoading.hide();
			});

			return defer.promise;
		}
	}
		Borrows.$inject = ['$log', '$http', 'URL', '$ionicLoading', '$q'];


	angular.module('10take.services')
		.service('Borrows', Borrows);

}());