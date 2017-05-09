/**
 * Created by duocai on 2016/9/6.
 */
angular.module('ctrl.map', [])

  .controller('MapCtrl', function($scope,$timeout,$ionicPopup,Webview,$state) {
    var latCurrent;
    var lngCurrent;
    $scope.loadMap = function() {

      var map = new BMap.Map("allmap");
      ///获取定位
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
          var mk = new BMap.Marker(r.point);
          map.addOverlay(mk);
          map.panTo(r.point);
          // alert('您的位置：'+r.point.lng+','+r.point.lat);
          latCurrent = parseFloat(r.point.lat);
          lngCurrent = parseFloat(r.point.lng);
          // alert('您的位置是' + latCurrent + ',' + lngCurrent);
        }
        else {
          alert('failed'+this.getStatus());
        }
      },{enableHighAccuracy: true})

////
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
        alert("当前定位地址为：" + address);
        // alert(e.addressComponent.lat + "!!!!!!");
      });
      geolocationControl.addEventListener("locationError",function(e){
        // 定位失败事件
        alert(e.message);
      });
      map.addControl(geolocationControl);
      ////
      var point = new BMap.Point(latCurrent,lngCurrent);
      map.centerAndZoom(point, 16);
      map.enableScrollWheelZoom();




      //////
      // 添加带有定位的导航控件
      var navigationControl = new BMap.NavigationControl({
        // 靠左上角位置
        anchor: BMAP_ANCHOR_TOP_LEFT,
        // LARGE类型
        type: BMAP_NAVIGATION_CONTROL_LARGE,
        // 启用显示定位
        enableGeolocation: true
      });
      map.addControl(navigationControl);


      var local = new BMap.LocalSearch(map, {
        renderOptions:{map: map}
      });
      local.search("景点");
    };

    $scope.refreshMap = function() {
      $scope.loadMap();
      $timeout(function(){
        $scope.$broadcast('scroll.refreshComplete');
      },1000)
    };

    $scope.go = function (end_pos) {
      if(end_pos == null || end_pos == '') {
        $ionicPopup.alert({
          title: '系统提示',
          template: '请输入终点！'
        });
      }
      else {
        var url = "http://api.map.baidu.com/direction?origin=" + latCurrent + "," + lngCurrent + "&destination=" + end_pos + "&mode=driving&region=绍兴&output=html";
        Webview.setView(url);
        $state.go("tab.map-webview");
      }
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
  })
  .controller('MapWebviewCtrl', function($scope, $sce, Webview) {
    $scope.trustSrc = $sce.trustAsResourceUrl(Webview.getView());
  });
