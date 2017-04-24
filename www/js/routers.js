/**
 * Created by duocai on 2016/9/6.
 */
angular.module('starter.routers', ['routers.account', 'routers.note','routers.dash'])

  .config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:

      .state('tab.dash', {
        url: '/dash',
        views: {
          'tab-dash': {
            templateUrl: 'templates/dash/tab-dash.html',
            controller: 'DashCtrl'
          }
        }
      })
      .state('tab.map', {
        url: '/map',
        views: {
          'tab-map': {
            templateUrl: 'templates/map/tab-map.html',
            controller: 'MapCtrl'
          }
        }
      })

      .state('tab.camera', {
        url: '/camera',
        views: {
          'tab-camera': {
            templateUrl: 'templates/camera/tab-camera.html',
            controller: 'CameraCtrl'
          }
        }
      })

      .state('tab.notes', {
        url: '/notes',
        //abstract: true,
        views: {
          'tab-notes': {
            templateUrl: 'templates/notes/tab-notes.html',
            controller: 'NotesCtrl'
          }
        }
      })

      .state('tab.account', {
        url: '/account',
        abstract: true,
        views: {
          'tab-account': {
            templateUrl: 'templates/account/tab-account.html',
            controller: 'AccountCtrl'
          }
        }
      })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/dash');

  });
