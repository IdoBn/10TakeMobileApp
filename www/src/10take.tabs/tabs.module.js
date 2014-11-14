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

	    .state('tabs.profile', {
	      url: '/profile',
	      views: {
	        'tab-profile': {
	          templateUrl: 'src/10take.tabs/profile/profile.html',
	          controller: 'ProfileCtrl as profile'
	        }
	      }
	    })


	    .state('tabs.borrows', {
	    	url: '/borrows',
	    	views: {
	    		'tab-borrows': {
	    			templateUrl: 'src/10take.tabs/borrows/borrows.html',
	    			controller: 'BorrowsCtrl as borrows'
	    		}
	    	}
	    })


	    .state('tabs.lends', {
	    	url: '/lends',
	    	views: {
	    		'tab-lends': {
	    			templateUrl: 'src/10take.tabs/lends/lends.html',
	    			controller: 'LendsCtrl as lends'
	    		}
	    	}
	    })

	    // .state('tabs.feed', {
	    //   url: '/feed',
	    //   views: {
	    //     'tab-feed': {
	    //       templateUrl: 'src/10take.tabs/feed/feed.html',
	    //       controller: 'FeedCtrl as feed'
	    //     }
	    //   }
	    // })
	    // .state('tabs.friend-detail', {
	    //   url: '/friend/:friendId',
	    //   views: {
	    //     'tab-friends': {
	    //       templateUrl: 'templates/friend-detail.html',
	    //       controller: 'FriendDetailCtrl'
	    //     }
	    //   }
	    // })

	    .state('tabs.discover', {
	      url: '/discover',
	      views: {
	        'tab-discover': {
	          templateUrl: 'src/10take.tabs/discover/discover.html',
	          controller: 'DiscoverCtrl as discover'
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