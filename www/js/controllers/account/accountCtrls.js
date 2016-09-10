/**
 * Created by duocai on 2016/9/6.
 */
angular.module('ctrl.account', [])

  .controller('AccountCtrl', function($scope) {

  })
  .controller( 'AccountGridCtrl', function ($scope) {
      $scope.test="Grid";
  })
  .controller( 'AccountBlogCtrl', function ($scope) {
    $scope.test="Blog";
  })
  .controller( 'AccountLocationCtrl', function ($scope) {
    $scope.test="Location";
  })
  .controller( 'AccountFavoritesCtrl', function ($scope) {
    $scope.test="Favorites";
  })
;
