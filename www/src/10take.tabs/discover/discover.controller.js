(function() {

	function DiscoverCtrl(Items, Borrows, log) {
		var _this = this;


		_this.reportEvent = function(e)  {
	    // log.debug('Reporting : ' + event.type);
	    // item.itemInfo = true;
	  }

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
		DiscoverCtrl.$inject = ['Items', 'Borrows', '$log'];


	angular.module('10take.tabs')
		.controller('DiscoverCtrl', DiscoverCtrl);

}());