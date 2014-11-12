(function() {

	function Run() {

	}

	function Config(stateProvider, urlRouterProvider) {

		// Ionic uses AngularUI Router which uses the concept of states
	  // Learn more here: https://github.com/angular-ui/ui-router
	  // Set up the various states which the app can be in.
	  // Each state's controller can be found in controllers.js
	  stateProvider

	    // setup an abstract state for the tabs directive
	    .state('tabs', {
	      url: "/tabs",
	      abstract: true,
	      templateUrl: "src/10take.tabs/tabs.html",
	      resolve: {
	      	auth: function($auth) {
	      		return $auth.validateUser();
	      	}
	      }
	    })

	    // Each tab has its own nav history stack:

	    .state('tabs.dash', {
	      url: '/dash',
	      views: {
	        'tab-dash': {
	          templateUrl: 'templates/tab-dash.html',
	          controller: 'DashCtrl'
	        }
	      }
	    })

	    .state('tabs.friends', {
	      url: '/friends',
	      views: {
	        'tab-friends': {
	          templateUrl: 'templates/tab-friends.html',
	          controller: 'FriendsCtrl'
	        }
	      }
	    })
	    .state('tabs.friend-detail', {
	      url: '/friend/:friendId',
	      views: {
	        'tab-friends': {
	          templateUrl: 'templates/friend-detail.html',
	          controller: 'FriendDetailCtrl'
	        }
	      }
	    })

	    .state('tabs.account', {
	      url: '/account',
	      views: {
	        'tab-account': {
	          templateUrl: 'templates/tab-account.html',
	          controller: 'AccountCtrl'
	        }
	      }
	    });

		  // if none of the above states are matched, use this as the fallback
		  urlRouterProvider.otherwise('/tabs/dash');

	}
		Config.$inject = ['$stateProvider', '$urlRouterProvider'];

	angular.module('10take.tabs', [])
	.run(Run)
	.config(Config)

}())