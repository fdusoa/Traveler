/**
 * Created by alex on 16/9/12.
 */
angular.module('service.myBlogs', [])

  .factory('MyBlogs', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var blogs = [{
      blogId:0,
      title:'Title0',
      author:'java programmer',
      img:'img/adam.jpg',
      content:'hello world',
      supportNum:10,
      comments:['an excellent blog!','i know you','goooooood'],
    }, {
      blogId:1,
      title:'I love linux',
      author:'CProgrammer',
      img:'img/ben.png',
      content:'hello world',
      supportNum:8,
      comments:['an excellent blog!','i know you','goooooood'],
    }, {
      blogId:2,
      title:'Title0',
      author:'java programmer',
      img:'img/mike.png',
      content:'hello world',
      supportNum:10,
      comments:['an excellent blog!','i know you','goooooood'],
    }, {
      blogId:3,
      title:'Title0',
      author:'java programmer',
      img:'img/mike.png',
      content:'hello world',
      supportNum:10,
      comments:['an excellent blog!','i know you','goooooood'],
    }, {
      blogId:4,
      title:'Title0',
      author:'java programmer',
      img:'img/mike.png',
      content:'hello world',
      supportNum:10,
      comments:['an excellent blog!','i know you','goooooood'],
    }, {
      blogId:5,
      title:'Title0',
      author:'java programmer',
      img:'img/mike.png',
      content:'hello world',
      supportNum:10,
      comments:['an excellent blog!','i know you','goooooood'],
    }, {
      blogId:6,
      title:'Title0',
      author:'java programmer',
      img:'img/mike.png',
      content:'hello world',
      supportNum:10,
      comments:['an excellent blog!','i know you','goooooood'],
    }];

    return {
      all: function() {
        return blogs;
      },
      remove: function(photo) {
        photos.splice(photos.indexOf(photo), 1);
      },
      get: function(blogId) {
        for (var i = 0; i < blogs.length; i++) {
          if (blogs[i].blogId === parseInt(blogId)) {
            return blogs[i];
          }
        }
        return null;
      }
    };
  });
