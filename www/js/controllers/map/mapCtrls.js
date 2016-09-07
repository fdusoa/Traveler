/**
 * Created by duocai on 2016/9/6.
 */
angular.module('ctrl.map', [])

  .controller('MapCtrl', function($scope) {
    // 百度地图API功能
    var map = new BMap.Map("allmap");  // 创建Map实例
    map.centerAndZoom("上海",15);      // 初始化地图,用城市名设置地图中心点
  });
