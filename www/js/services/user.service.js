/**
 * Created by duocai on 2017/5/8.
 */

angular.module('service.user', [])


  .factory('User', function(Url, $q) {


    var soap = require('soap');
    var url = Url.userServiceUrl();
    var args = {
      username: 'admin2',
      password: 'admin2'
    };


    return {
      /**
       *
       * @param user '{username: "", password: ""}'
       */
      login: function (user) {
        var deferred = $q.defer();
        soap.createClient(url, function(err, client) {
          if (err !== null) {
            deferred.reject(err);
            return ;
          }
          client.login(user, function (err, result) {
            if (err !== null)
              deferred.reject(err);
            else
              deferred.resolve(result.return.loginResponse);
          })
        });
        return deferred.promise;
      }
    }

  });
