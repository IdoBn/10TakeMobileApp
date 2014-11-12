(function() {

	function AuthCtrl(log) {
		log.debug('auth ctrl');
		this.title = 'Auth Title';
	}
		AuthCtrl.$inject = ['$log'];

	angular.module('10take.auth')
		.controller('AuthCtrl', AuthCtrl);

}());