(function() {

	function Run(ionicPlatform) {
		ionicPlatform.ready(function() {
	    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
	    // for form inputs)
	    if(window.cordova && window.cordova.plugins.Keyboard) {
	      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	    }
	    if(window.StatusBar) {
	      // org.apache.cordova.statusbar required
	      StatusBar.styleDefault();
	    }
	  });
	}
		Run.$inject = ['$ionicPlatform'];


	function Config(urlRouterProvider) {
		urlRouterProvider.otherwise('/tabs/profile');
	}
		Config.$inject = ['$urlRouterProvider'];


	angular.module('10take', [
		'ionic',
		'ngCordova',
		'ng-token-auth',
		'10take.tabs',
		'10take.auth',
		'starter.controllers', 
		'starter.services'
		])
		.run(Run)
		.config(Config)

}());