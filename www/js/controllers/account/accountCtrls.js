/**
 * Created by duocai on 2016/9/6.
 */
angular.module('ctrl.account', [])

  .controller('AccountCtrl', function($scope, User) {

    $scope.ume = "";
    $scope.pwd = "";

    $scope.login = function () {
      User.login($scope.ume, $scope.pwd);
    }
  })
  .controller( 'AccountGridCtrl', function ($scope,MyPhotos) {
      // $scope.test="Grid";
    $scope.photos = MyPhotos.all();
    var length = MyPhotos.all().length;
    $scope.photosView = [];
    var list_3 = [];
    for (var i = 0;i<length;i++){
      list_3.push($scope.photos[i]);
      if (i%3 == 2) {
        $scope.photosView.push(list_3);
        list_3 = [];
      }
    }
    $scope.photosView.push(list_3);


  })
  .controller( 'AccountBlogCtrl', function ($scope,MyBlogs) {
    $scope.myBlogs = MyBlogs.all();
  })
  .controller( 'AccountLocationCtrl', function ($scope) {
    $scope.test="Location";
  })
  .controller( 'AccountFavoritesCtrl', function ($scope) {
    $scope.test="Favorites";
  })
  .controller('BlogDetailCtrl',function ($scope,$stateParams,MyBlogs) {
    $scope.blog = MyBlogs.get($stateParams.blogId);
  })
;
