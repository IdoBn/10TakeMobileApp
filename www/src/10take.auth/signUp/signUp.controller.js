(function() {

	function SignUpCtrl(log, scope, auth, state) {
		log.debug('sign up ctrl');
		scope.auth.title = 'Sign Up';

		this.handleSignUp = function(user) {
			log.debug(user);
			 auth.submitRegistration(user)
        .then(function(resp) { 
          // handle success response
          log.debug('resp handle sign up', resp);
          state.go('tabs.dash');	
        })
        .catch(function(resp) { 
          // handle error response
          log.debug('resp handle sign up', resp);
        });
    }
	}
		SignUpCtrl.$inject = ['$log', '$scope', '$auth', '$state'];

	angular.module('10take.auth')
		.controller('SignUpCtrl', SignUpCtrl)

}());