(function() {

	function ProfileCtrl(log, ionicModal, scope) {
		log.debug('profile ctrl');
		var _this = this;

		// modal
		ionicModal.fromTemplateUrl('src/10take.tabs/profile/modal.html', {
	    scope: scope,
	    animation: 'slide-in-up'
	  }).then(function(modal) {
	    _this.modal = modal;
	  });
	  _this.openModal = function() {
	    _this.modal.show();
	  };
	  _this.closeModal = function() {
	    _this.modal.hide();
	  };
	  //Cleanup the modal when we're done with it!
	  scope.$on('$destroy', function() {
	   	_this.modal.remove();
	  });
	  // Execute action on hide modal
	  scope.$on('modal.hidden', function() {
	    // Execute action
	  });
	  // Execute action on remove modal
	  scope.$on('modal.removed', function() {
	    // Execute action
	  });






	}
		ProfileCtrl.$inject = ['$log', '$ionicModal', '$scope']

	angular.module('10take.tabs')
		.controller('ProfileCtrl', ProfileCtrl)

}());