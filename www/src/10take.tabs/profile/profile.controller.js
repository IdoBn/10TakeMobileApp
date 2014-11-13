(function() {

	function ProfileCtrl(log, ionicModal, scope, cordovaCamera, ionicPlatform, http) {
		log.debug('profile ctrl');
		var _this = this;
		_this.item = {};
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


	  _this.uploadItem = function(item) {
	  	log.debug('uploading item', item);

	  	http.post('http://172.20.20.175:3000/items', {
	  		item: item
	  	}).
		  success(function(data, status, headers, config) {
		    log.debug('data', data);
		  }).
		  error(function(data, status, headers, config) {
		    log.debug('error', data);
		  });
	  };


	  ionicPlatform.ready(function() {
		  _this.takePicture = function() {
		  	var Camera = navigator.camera;

		    var options = {
		        quality : 75,
		        destinationType : Camera.DestinationType.DATA_URL,
		        sourceType : Camera.PictureSourceType.CAMERA,
		        allowEdit : true,
		        encodingType: Camera.EncodingType.JPEG,
		        targetWidth: 100,
		        targetHeight: 100,
		        popoverOptions: CameraPopoverOptions,
		        saveToPhotoAlbum: false
		    };

		    cordovaCamera.getPicture(options).then(function(imageData) {
		      // Success! Image data is here
		      log.debug('image success', imageData);
		      _this.item.image = 'data:image/jpeg;base64,' + imageData;
		    }, function(err) {
		      // An error occured. Show a message to the user
		      log.debug('error', err);
		    });
		  };
		});


	}
		ProfileCtrl.$inject = ['$log', '$ionicModal', '$scope', '$cordovaCamera', '$ionicPlatform', '$http']

	angular.module('10take.tabs')
		.controller('ProfileCtrl', ProfileCtrl)

}());