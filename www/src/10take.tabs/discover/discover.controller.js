(function() {

	function DiscoverCtrl(Items, Borrows) {
		var _this = this;

		Items.all().then(function(data) {
			//success
			_this.items = data.items
		},function(err) {
			//error
		})

		_this.borrowItem = function(item_id) {
			Borrows.create(item_id).then(function(data) {
				// success
			}, function(data) {
				// error
			});
		};
	}
		DiscoverCtrl.$inject = ['Items', 'Borrows'];


	angular.module('10take.tabs')
		.controller('DiscoverCtrl', DiscoverCtrl);

}());