/**
 * Created by duocai on 2016/9/6.
 */
angular.module('ctrl.dash', [])

  .controller('DashCtrl', function($scope,$ionicSlideBoxDelegate,$timeout,Trends) {
    $ionicSlideBoxDelegate.update();
    $scope.trends = Trends.all();

    $scope.doRefresh = function() {
      $timeout(function(){
        $scope.$broadcast('scroll.refreshComplete');
      },1000)
    };
  });
