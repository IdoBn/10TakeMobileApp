(function() {

	function LendsCtrl(log, Borrows, auth, HandOff) {
		log.debug('lends ctrl');
		var _this = this;

		Borrows.iWantToBorrow(auth.user.id).then(function(data) {
			// success
			_this.borrows = data.borrows
		}, function(data) {
			// error
		});

		this.handleNextStep = function(handOff_id) {
			HandOff.nextStep(handOff_id).then(function(data) {
				// success
			}, function(data) {
				// error
			});
		};
	}	
		LendsCtrl.$inject = ['$log', 'Borrows', '$auth', 'HandOff'];

	angular.module('10take.tabs')
		.controller('LendsCtrl', LendsCtrl);

}());