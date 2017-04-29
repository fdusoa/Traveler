/**
 * Created by duocai on 2016/9/15.
 */
angular.module('service.Trends', [])

  .factory('Trends', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var trends = [{
      title: '延安宝塔风景区',
      url: 'http://www.360vrpano.com/index.php/Project/viewProject/id/8394.html',
      images: [
        {
          path: 'img/photos/pic0.jpg'
        }, {
          path: 'img/photos/pic1.jpg'
        }, {
          path: 'img/photos/pic2.jpg'
        }, {
          path: 'img/photos/pic3.jpg'
        }
      ],
      likes: 3,
      comments:5
    },
    {
      title: '百度地图全景',
      url: 'templates/dash/baidu_panorama.html',
      images: [
        {
          path:'img/photos/pic4.jpg'
        }, {
          path:'img/photos/pic5.jpg'
        }, {
          path:'img/photos/pic6.jpg'
        }, {
          path:'img/photos/pic7.jpg'
        }
      ],
      likes: 23,
      comments: 25
    },
    {
      title: '五龙山石夫人',
      url: 'http://www.360vrpano.com/index.php/Project/viewProject/id/8647.html',
      images:[
        {
          path:'img/photos/pic8.jpg'
        },
        {
          path:'img/photos/pic5.jpg'
        }, {
          path:'img/photos/pic6.jpg'
        }, {
          path:'img/photos/pic7.jpg'
        }
      ],
      likes:23,
      comments:34
    }
    ];
    return {
      all: function() {
        return trends;
      },
      remove: function(trend) {
        trends.splice(trends.indexOf(trend), 1);
      },
      get: function(index) {
        if(index < trends.length){
          return trends[index];
        }else {
          return null;
        }
      }
    };
  });
