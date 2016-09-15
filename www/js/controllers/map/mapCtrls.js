/**
 * Created by duocai on 2016/9/6.
 */
angular.module('ctrl.map', [])

  .controller('MapCtrl', function($scope) {
    // 百度地图API功能
    var map = new BMap.Map("allmap");  // 创建Map实例
    map.centerAndZoom("上海",15);      // 初始化地图,用城市名设置地图中心点
    // 添加定位控件
    var geolocationControl = new BMap.GeolocationControl();
    geolocationControl.addEventListener("locationSuccess", function(e){
      // 定位成功事件
      var address = '';
      address += e.addressComponent.province;
      address += e.addressComponent.city;
      address += e.addressComponent.district;
      address += e.addressComponent.street;
      address += e.addressComponent.streetNumber;
    });
    geolocationControl.addEventListener("locationError",function(e){
      // 定位失败事件
      alert(e.message);
    });
    map.addControl(geolocationControl);
  });
