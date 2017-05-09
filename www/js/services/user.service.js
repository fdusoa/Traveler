
/**
 * Created by duocai on 2017/5/8.
 */

angular.module('service.user', [])


  .factory('User', function($q) {
    var plugin = {
      name: "UserPlugin",
      login: "login",
      register: "register"
    };

    var logined = false;

    return {
      /**
       *
       * @param user '{username: "", password: ""}'
       */
      login: function (user) {
        var deferred = $q.defer();
        var sucess = function () {
          logined = true;
          deferred.resolve(1);
        };
        var fail = function () {
          deferred.reject(0);
        };
        cordova.exec(sucess, fail, plugin.name, plugin.login, [user.username, user.password]);
        return deferred.promise;
      },
      /**
       *
       * @param user '{username: "", password: ""}'
       */
      register: function (user) {
        var deferred = $q.defer();
        var sucess = function () {
          logined = true;
          deferred.resolve(1);
        };
        var fail = function () {
          deferred.reject(0);
        };
        cordova.exec(sucess, fail, plugin.name, plugin.register, [user.username, user.password]);
        return deferred.promise;
      },

      isLogin: function () {
        return logined;
      },

      setLogin: function () {
        logined = true;
      }
    }

  });
