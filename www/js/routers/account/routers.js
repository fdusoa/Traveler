/**
 * Created by alex on 16/9/10.
 */
/**
 * Created by duocai on 2016/9/6.
 */
angular.module('routers.account', [])

  .config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
      .state('tab.account.grid', {
        url: '/grid',
        views: {
          'account-content': {
            templateUrl: 'templates/account/account-grid.html',
            controller: 'AccountGridCtrl'
          }
        }
      })
      .state("tab.account.blog",{
        url:'/blog',
        views:{
          'account-content':{
            templateUrl: 'templates/account/account-blog.html',
            controller: 'AccountBlogCtrl'
          }
        }
      })
      .state("tab.account.location",{
        url:"/location",
        views:{
          'account-content':{
            templateUrl: 'templates/account/account-location.html',
            controller: 'AccountLocationCtrl'
          }
        }
      })
      .state("tab.account.favorites",{
        url:"/favorites",
        views:{
          'account-content':{
            templateUrl: 'templates/account/account-favorites.html',
            controller: 'AccountFavoritesCtrl'
          }
        }
      })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/dash');

  });
