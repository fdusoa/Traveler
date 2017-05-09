/**
 * Created by duocai on 2017/5/9.
 */
angular.module('routers.map', [])

  .config(function($stateProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
      .state("tab.map-webview", {
        url: "/map-webview",
        views: {
          'tab-map': {
            templateUrl: 'templates/map/webview.html',
            controller: 'MapWebviewCtrl'
          }
        }
      })
    ;
  });
