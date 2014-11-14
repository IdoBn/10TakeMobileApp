(function() {

	angular.module('10take.directives', ['ngAnimate'])


	.directive('bckImg', function() {
		return function(scope, element, attrs) {
			var url = attrs.backImg;
			element.css({
				'background-image': 'url(' + url + ')',
				'background-size' : 'cover'
			});
		}
	})




	.directive('detectGestures', function($ionicGesture) {
	 	return {
	    restrict :  'A',

	    	link : function(scope, elem, attrs) {
	      	var gestureType = attrs.gestureType;
	      	var userCallBack = scope.$eval(attrs.callBack);
	      	var callback = function(e) {
	      		if (angular.element(elem[0].childNodes[1]).hasClass('double-tap')) {
	      			angular.element(elem[0].childNodes[1]).removeClass('double-tap')
	      			angular.element(elem[0].childNodes[3]).addClass('hidden');
	      		} else {
	      			angular.element(elem[0].childNodes[1]).addClass('double-tap')
	      			angular.element(elem[0].childNodes[3]).removeClass('hidden');
	      		}
	      		userCallBack(e);
	      	};

		      switch(gestureType) {
		        case 'swipe':
		          $ionicGesture.on('swipe', callback, elem);
		          break;
		        case 'swiperight':
		          $ionicGesture.on('swiperight', callback, elem);
		          break;
		        case 'swipeleft':
		          $ionicGesture.on('swipeleft', callback, elem);
		          break;
		        case 'doubletap':
		          $ionicGesture.on('doubletap', callback, elem);
		          break;
		        case 'tap':
		          $ionicGesture.on('tap', callback, elem);
		          break;
		      }
	    	}
	  	}	
		});

}());