(function() {

	function BorrowsCtrl(log, Borrows, auth, HandOff) {
		var _this = this;
		log.debug('borrows ctrl');
		Borrows.whoWantToBorrow(auth.user.id).then(function(data) {
			// success
			_this.borrows = data.borrows
		}, function(data) {
			// error
		});

		this.handleHandOff = function(borrow_id) {
			HandOff.create(borrow_id).then(function(data) {
				// success
			}, function(data) {
				// error
			})
		}
	}	
		BorrowsCtrl.$inject = ['$log', 'Borrows', '$auth', 'HandOff'];

	angular.module('10take.tabs')
		.controller('BorrowsCtrl', BorrowsCtrl);

}());