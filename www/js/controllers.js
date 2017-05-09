angular.module('starter.controllers', ['ctrl.notes','ctrl.account','ctrl.camera','ctrl.dash',
  'ctrl.map'])
  .controller('TabController', function($scope, User, $state) {

    //检查是否已登录
    $scope.check = function () {
      if (!User.isLogin())
        $state.go("tab.login");
      else
        $state.go("tab.account.grid");
    };
  })
  ;
