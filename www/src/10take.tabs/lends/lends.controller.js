(function() {

	function LendsCtrl(log, Borrows, auth) {
		log.debug('lends ctrl');
		var _this = this;

		Borrows.iWantToBorrow(auth.user.id).then(function(data) {
			// success
			_this.borrows = data.borrows
		}, function(data) {
			// error
		})
	}	
		LendsCtrl.$inject = ['$log', 'Borrows', '$auth'];

	angular.module('10take.tabs')
		.controller('LendsCtrl', LendsCtrl);

}());