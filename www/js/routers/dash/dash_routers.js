/**
 * Created by duocai on 2017/4/24.
 */

angular.module('routers.dash', [])

  .config(function($stateProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
      .state('tab.panorama', {
        url: '/panorama/:panoramaId',
        views: {
          'tab-dash': {
            templateUrl: 'templates/dash/panorama.html',
            controller: 'PanoramaCtrl'
          }
        }
      })
      .state("tab.dash-webview", {
        url: "/dash-webview",
        views: {
          'tab-dash': {
            templateUrl: 'templates/dash/webview.html',
            controller: 'DashWebviewCtrl'
          }
        }
      })
    ;
  });
