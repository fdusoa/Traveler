/**
 * Created by duocai on 2017/5/8.
 */

angular.module('service.url', [])


  .factory('Url', function() {

    var urls= {
      user: "http://120.76.125.35/axis2/services/UserService?wsdl"
    };

    return {
      userServiceUrl: function () {
        return urls.user;
      }
    }
  });
