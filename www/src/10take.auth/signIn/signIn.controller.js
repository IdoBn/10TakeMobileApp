(function() {

	function SignInCtrl(log, scope, auth, state) {
		log.debug('sign in controller');
		scope.auth.title = 'Sign In';

		this.handleSignIn = function(user) {
			log.debug('user handle sign in', user);
			auth.submitLogin(user)
				.then(function(resp) {
					log.debug('resp handle sign in then', resp);
					state.go('tabs.dash');
				})
				.catch(function(resp) {
					log.debug('resp handle sign in catch', resp)
				})
		};
	}
		SignInCtrl.$inject = ['$log', '$scope', '$auth', '$state'];

	angular.module('10take.auth')
		.controller('SignInCtrl', SignInCtrl);

}());