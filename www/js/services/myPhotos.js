/**
 * Created by alex on 16/9/12.
 */
angular.module('service.myPhotos', [])

  .factory('MyPhotos', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var photos = [{
      path:'img/photos/pic0.jpg'
    }, {
      path:'img/photos/pic1.jpg'
    }, {
      path:'img/photos/pic2.jpg'
    }, {
      path:'img/photos/pic3.jpg'
    }, {
      path:'img/photos/pic4.jpg'
    }, {
      path:'img/photos/pic5.jpg'
    }, {
      path:'img/photos/pic6.jpg'
    }, {
      path:'img/photos/pic7.jpg'
    }, {
      path:'img/photos/pic8.jpg'
    }];

    return {
      all: function() {
        return photos;
      },
      remove: function(photo) {
        photos.splice(photos.indexOf(photo), 1);
      },
      get: function(index) {
        if(index < photos.length){
          return photos[index];
        }else {
          return null;
        }
      }
    };
  });
