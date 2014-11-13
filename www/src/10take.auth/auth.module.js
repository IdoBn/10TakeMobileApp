(function() {

	function Run(rootScope, log, state) {
		rootScope.$on('$stateChangeError', function() {
			log.error('route unauthorized');
			state.go('auth');
		});
	}
		Run.$inject = ['$rootScope', '$log', '$state'];

	function Config(stateProvider, urlRouterProvider, authProvider) {
		stateProvider
			.state('auth', {
				'abstract': true,
				url: '/auth',
				templateUrl: 'src/10take.auth/auth.html',
				controller: 'AuthCtrl as auth'
			})
			.state('auth.signIn', {
				url: '/signIn',
				views: {
					'auth': {
						templateUrl: 'src/10take.auth/signIn/signIn.html',
						controller: 'SignInCtrl as signIn'
					}
				}
			})
			.state('auth.signUp', {
				url: '/signUp',
				views: {
					'auth': {
						templateUrl: 'src/10take.auth/signUp/signUp.html',
						controller: 'SignUpCtrl as signUp'
					}
				}
			})

		// home page
		urlRouterProvider.otherwise('/auth/signIn');

		authProvider.configure({
			apiUrl:  'http://localhost:3000',
			storage: 'localStorage',
			confirmationSuccessUrl: window.location.origin + '/#/tabs/dash'
		});
	}
		Config.$inject = ['$stateProvider', '$urlRouterProvider', '$authProvider'];

	angular.module('10take.auth', [])
		.run(Run)
		.config(Config)

}());