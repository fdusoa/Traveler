
/**
 * Created by duocai on 2016/9/6.
 */
angular.module('ctrl.dash', ['ngSanitize'])

  .controller('DashCtrl', function($scope,$ionicSlideBoxDelegate,$timeout,$state, Trends, Scene) {
    $ionicSlideBoxDelegate.update();
    $scope.trends = Trends.all();

    $scope.doRefresh = function() {
      $timeout(function(){
        $scope.$broadcast('scroll.refreshComplete');
      },1000)
    };
    $scope.show = function (id) {
      $state.go('tab.panorama',{panoramaId: id}, {reload: true});
    }
  })
  .controller('PanoramaCtrl', function($scope, $stateParams, $sce, Trends, Scene, $state, Webview) {
    var id = $stateParams.panoramaId;
    $scope.pano = Trends.get(id);
    $scope.trustSrc = function() {
      return $sce.trustAsResourceUrl($scope.pano.url);
    };
    $scope.goThere = function () {
      var url = "http://api.map.baidu.com/direction?origin=绍兴&destination=北京&mode=driving&region=绍兴&output=html";
      Webview.setView(url);
      $state.go("tab.dash-webview");
    }
  })
  .controller('DashWebviewCtrl', function($scope, $stateParams, $sce, Trends, $state, Webview) {
    $scope.trustSrc =  $sce.trustAsResourceUrl(Webview.getView());
  });
