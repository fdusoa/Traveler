/**
 * Created by duocai on 2016/9/6.
 */
angular.module('ctrl.map', [])

  .controller('MapCtrl', function($scope,$timeout) {
    $scope.loadMap = function() {
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
    };

    $scope.refreshMap = function() {
      $scope.loadMap();
      $timeout(function(){
        $scope.$broadcast('scroll.refreshComplete');
      },1000)
    };

    $scope.loadMap();

    //全景图展示
    //var panorama = new BMap.Panorama('panorama');
    //panorama.setPosition(new BMap.Point(120.320032, 31.589666)); //根据经纬度坐标展示全景图
    //panorama.setPov({heading: -40, pitch: 6});
    //
    //panorama.addEventListener('position_changed', function(e){ //全景图位置改变后，普通地图中心点也随之改变
    //  var pos = panorama.getPosition();
    //  map.setCenter(new BMap.Point(pos.lng, pos.lat));
    //  marker.setPosition(pos);
    //});
    ////普通地图展示
    //var mapOption = {
    //  mapType: BMAP_NORMAL_MAP,
    //  maxZoom: 18,
    //  drawMargin:0,
    //  enableFulltimeSpotClick: true,
    //  enableHighResolution:true
    //};
    //var map = new BMap.Map("normal_map", mapOption);
    //var testpoint = new BMap.Point(120.320032, 31.589666);
    //map.centerAndZoom(testpoint, 18);
    //var marker=new BMap.Marker(testpoint);
    //marker.enableDragging();
    //map.addOverlay(marker);
    //marker.addEventListener('dragend',function(e){
    //    panorama.setPosition(e.point); //拖动marker后，全景图位置也随着改变
    //    panorama.setPov({heading: -40, pitch: 6});}
    //);
  });
