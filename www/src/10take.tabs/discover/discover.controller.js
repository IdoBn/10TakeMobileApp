(function() {

	function DiscoverCtrl(Items) {
		var _this = this;

		Items.all().then(function(data) {
			//success
			_this.items = data.items
			console.log(_this.items);
		},function(err) {
			//error
		})
	}
		DiscoverCtrl.$inject = ['Items'];


	angular.module('10take.tabs')
		.controller('DiscoverCtrl', DiscoverCtrl);

}());