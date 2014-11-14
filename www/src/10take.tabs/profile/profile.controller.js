(function() {

	function ProfileCtrl(log, ionicModal, scope, cordovaCamera, ionicPlatform, http, URL, ionicLoading, Users, auth) {

		log.debug('profile ctrl');
		var _this = this;
		_this.item = {};





		Users.find(auth.user.id).then(function(data) {
			// success
			_this.user = data.user;
		}, function(data) {
			// error
		})



		_this.reportEvent = function(e) {};





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


	  _this.uploadItem = function(item) {
	  	ionicLoading.show({
      	template: 'Loading...'
    	});

	  	log.debug('uploading item', item);

	  	var image = b64toBlob(item.image);

	  	var formData = new FormData();
	  	formData.append('item[name]', item.name);
	  	formData.append('item[description]', item.description);
	  	formData.append('item[image]', image);

	  	http({
	  		method: 'POST',
	  		url: URL + '/items',
	  		data: formData,
	  		transformRequest: angular.identity,
	  		headers: {
	  			'content-type': undefined
	  		}
	  	}).success(function(data, status, headers, config) {
		    log.debug('data', data);
		    _this.modal.hide();
		    ionicLoading.hide();
		  }).error(function(data, status, headers, config) {
		    log.debug('error', data);
		    ionicLoading.hide();
		  });
	  };


	  function b64toBlob(b64Data, contentType) {
		    contentType = contentType || '';
		    var sliceSize = 1024;

		    var byteCharacters = atob(b64Data);
		    var byteArrays = [];

		    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
		        var slice = byteCharacters.slice(offset, offset + sliceSize);

		        var byteNumbers = new Array(slice.length);
		        for (var i = 0; i < slice.length; i++) {
		            byteNumbers[i] = slice.charCodeAt(i);
		        }

		        var byteArray = new Uint8Array(byteNumbers);

		        byteArrays.push(byteArray);
		    }

		    var blob = new Blob(byteArrays, {type: contentType});
		    return blob;
		}


	  ionicPlatform.ready(function() {
		  _this.takePicture = function() {
		  	var Camera = navigator.camera;

		    var options = {
		        quality : 100,
		        destinationType : Camera.DestinationType.DATA_URL,
		        sourceType : Camera.PictureSourceType.CAMERA,
		        allowEdit : true,
		        encodingType: Camera.EncodingType.JPEG,
		        targetWidth: 500,
		        targetHeight: 500,
		        popoverOptions: CameraPopoverOptions,
		        saveToPhotoAlbum: false
		    };

		    cordovaCamera.getPicture(options).then(function(imageData) {
		      // Success! Image data is here
		      log.debug('image success', imageData);
		      _this.displayImage = 'data:image/jpeg;base64,' + imageData;
		      _this.item.image = imageData;//'data:image/jpeg;base64,' + imageData;
		    }, function(err) {
		      // An error occured. Show a message to the user
		      log.debug('error', err);
		    });
		  };
		});


	}
		ProfileCtrl.$inject = ['$log', '$ionicModal', '$scope', '$cordovaCamera', '$ionicPlatform', '$http', 'URL', '$ionicLoading', 'Users', '$auth']

	angular.module('10take.tabs')
		.controller('ProfileCtrl', ProfileCtrl)

}());