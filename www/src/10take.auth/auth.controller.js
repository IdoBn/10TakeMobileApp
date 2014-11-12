(function() {

	function AuthCtrl(log) {
		log.debug('auth ctrl');
	}
		AuthCtrl.$inject = ['$log'];

	angular.module('10take.auth')
		.controller('AuthCtrl', AuthCtrl);

}());