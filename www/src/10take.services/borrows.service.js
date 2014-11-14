(function() {

	function Borrows(log, http, URL, ionicLoading, q) {
		var _this = this;

		this.whoWantToBorrow = function(borrower_id) {
			// people who want to borrow your items this will go in lends
			return _this.all({borrower: borrower_id});
		};

		this.iWantToBorrow = function(lender_id) {
			// the items that I want to borrow will go in borrow
			return _this.all({lender: lender_id});
		}

		this.all = function(param) {
			ionicLoading.show({
	    	template: 'Loading...'
	  	});

	  	var defer = q.defer();

			http.get(URL + '/borrows', {params: param})
			.success(function(data) {
				log.debug('borrows all ', data);
				defer.resolve(data);
				ionicLoading.hide();
			})
			.error(function(data) {
				log.error('borrows all ', data);
				defer.reject(data);
				ionicLoading.hide();
			});

			return defer.promise;
		}

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
		};
	}
		Borrows.$inject = ['$log', '$http', 'URL', '$ionicLoading', '$q'];


	angular.module('10take.services')
		.service('Borrows', Borrows);

}());