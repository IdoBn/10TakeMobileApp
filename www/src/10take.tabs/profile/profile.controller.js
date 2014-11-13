(function() {

	function ProfileCtrl(log) {
		log.debug('profile ctrl');
	}
		ProfileCtrl.$inject = ['$log']

	angular.module('10take.tabs')
		.controller('ProfileCtrl', ProfileCtrl)

}());