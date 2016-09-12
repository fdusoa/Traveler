/**
 * Created by duocai on 2016/9/6.
 */
angular.module('starter.routers', ['routers.account'])

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
        views: {
          'tab-notes': {
            templateUrl: 'templates/notes/tab-notes.html',
            controller: 'NotesCtrl'
          }
        }
      })
      .state('tab.note-detail', {
        url: '/notes/:noteId',
        views: {
          'tab-notes': {
            templateUrl: 'templates/notes/note-detail.html',
            controller: 'NoteDetailCtrl'
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
      .state('tab.blogs-detail',{
        url:'/blogs/:blogId',
        views:{
          'tab-account':{
            templateUrl:'templates/account/blog-detail.html',
            controller:'BlogDetailCtrl'
          }
        }
      })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/dash');

  });
