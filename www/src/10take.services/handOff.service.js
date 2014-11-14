(function() {

	function HandOff(log, http, URL, ionicLoading, q) {

		this.nextStep = function(handOff_id) {
			ionicLoading.show({
				template: 'Loading...'
			});

			var defer = q.defer();

			http.put(URL + '/hand_offs', {
				id: handOff_id
			}).success(function(data) {
				log.debug('hand_off nextStep', data)
				defer.resolve(data);
				ionicLoading.hide();
			}).error(function(data) {
				log.error('hand_off nextStep ', data);
				defer.reject(data);
				ionicLoading.hide();
			});

			return defer.promise;
		};

		this.create = function(borrow_id) {
			ionicLoading.show({
				template: 'Loading...'
			});

			var defer = q.defer();

			http.post(URL + '/hand_offs', {
				borrow_id: borrow_id
			}).success(function(data) {
				log.debug('hand_off create', data)
				defer.resolve(data);
				ionicLoading.hide();
			}).error(function(data) {
				log.error('hand_off create ', data);
				defer.reject(data);
				ionicLoading.hide();
			});

			return defer.promise;
		};
	}
		HandOff.$inject = ['$log', '$http', 'URL', '$ionicLoading', '$q'];

	angular.module('10take.services')
		.service('HandOff', HandOff);

}());