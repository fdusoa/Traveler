/**
 * Created by duocai on 2016/9/6.
 */
angular.module('ctrl.dash', ['ngSanitize'])

  .controller('DashCtrl', function($scope,$ionicSlideBoxDelegate,$timeout,$state, Trends) {
    $ionicSlideBoxDelegate.update();
    $scope.trends = Trends.all();

    $scope.others = Trends.others();

    $scope.doRefresh = function() {
      $timeout(function(){
        $scope.$broadcast('scroll.refreshComplete');
      },1000)
    };
    $scope.show = function (index) {
      $state.go('tab.panorama',{panoramaId: index}, {reload: true});
    }
  })
  .controller('PanoramaCtrl', function($scope, $stateParams, $sce, Trends) {
    var id = $stateParams.panoramaId;
    $scope.pano = Trends.get(id);
    $scope.trustSrc = function() {
      return $sce.trustAsResourceUrl($scope.pano.url);
    };
    $scope.goThere = function () {
      location.href = "http://api.map.baidu.com/direction?origin=绍兴&destination=北京&mode=driving&region=绍兴&output=html";
    }
  });
