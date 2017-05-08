<<<<<<< Updated upstream
/**
 * Created by duocai on 2017/5/8.
 */

angular.module('service.user', [])


  .factory('User', function(Url, $q, $http) {

    var url = Url.userServiceUrl();

    return {
      /**
       *
       * @param user '{username: "", password: ""}'
       */
      login: function (user) {
        var deferred = $q.defer();
        $http.get("http://120.76.125.35/axis2/services/UserService" +
          "/login?username=admin&password=admin").success(function (result) {
          alert(result);
        });
        // in global scope:
        tinysoap.createClient(url, function(err, client) {
          client.login(user, function (err, result) {
            alert(result);
          })
        });
        return deferred.promise;
      }
    }

  });
=======
/**
 * Created by duocai on 2017/5/8.
 */

angular.module('service.user', [])


  .factory('User', function(Url) {


  });
>>>>>>> Stashed changes
