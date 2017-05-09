/**
 * Created by duocai on 2016/9/6.
 */
angular.module('ctrl.account', [])

  .controller('AccountCtrl', function($scope, User) {

    // $scope.ume = "";
    // $scope.pwd = "";
    //
    // $scope.login = function () {
    //   User.login($scope.ume, $scope.pwd);
    // }
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
  .controller('BlogDetailCtrl', function ($scope,$stateParams,MyBlogs) {
    $scope.blog = MyBlogs.get($stateParams.blogId);
  })
  .controller('AccountInfoCtrl', function ($scope, $ionicPopup) {
    $scope.showConfirm = function() {
      var confirmPopup = $ionicPopup.confirm({
        title: '退出后不会删除任何历史数据,下次登录依然可以使用本账号。',
        template: '你确定要退出登录吗?'
      });
      confirmPopup.then(function(res) {
        if(res) {
          console.log('You are sure');
        } else {
          console.log('You are not sure');
        }
      });
    };
  })

  .controller('LoginCtrl', function ($scope,$rootScope,$ionicPopup,$state,User) {
    $scope.user = {
      username: "",
      password: ""
    };
    $scope.checkLogin = function () {
      var account = $scope.user.username;
      var password = $scope.user.password;
      if(account === '' || account === null || password === '' || password === null){
        $ionicPopup.alert({
          title:'系统提示',
          template: '用户名和密码不能为空!'
        });
      }
      else {
        User.login($scope.user).then(function () {
          $state.go('tab.account.grid');
        }, function () {
          $ionicPopup.alert({
            title:'系统提示',
            template: '用户名或密码错误!'
          });
        });

      }
    }
  })
  .controller('RegisterCtrl', function ($scope, $ionicPopup, $state, User) {

    $scope.checkRegister = function (account, password) {
      if(account === '' || account === null || password === '' || password === null){
        $ionicPopup.alert({
          title:'系统提示',
          template: '用户名和密码不能为空!'
        });
      }
      else {
        User.register({username: account, password: password}).then(function () {
          $state.go('tab.account.grid');
        }, function () {
          $ionicPopup.alert({
            title:'系统提示',
            template: '账户已存在!'
          });
        });

      }
    }
  });
