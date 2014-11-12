(function() {

	function SignInCtrl(log) {
		log.debug('sign in controller');
	}
		SignInCtrl.$inject = ['$log'];

	angular.module('10take.auth')
		.controller('SignInCtrl', SignInCtrl);

}());