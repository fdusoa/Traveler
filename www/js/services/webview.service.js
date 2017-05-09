/**
 * Created by duocai on 2017/5/9.
 */

angular.module('service.webview', [])


  .factory('Webview', function() {

    var view;
    return {
      getView: function () {
        return view;
      },
      setView: function (newView) {
        view = newView;
      }
    }

  });
