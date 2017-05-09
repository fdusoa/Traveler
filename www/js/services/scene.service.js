/**
 * Created by duocai on 2017/5/8.
 */

angular.module('service.scene', [])


  .factory('Scene', function($q) {

    var plugin = {
      name: "ScenePlugin",
      getScene: "getScene", //id
      getScenePage: "getScenePage" // offset , limit
    };
    return {
      getScene: function (id) {
        var deferred = $q.defer();
        var sucess = function (result) {
          deferred.resolve(result);
        };
        cordova.exec(sucess, null, plugin.name, plugin.getScene, [id]);
        return deferred.promise;
      },
      getScenePage: function (offset, limit) {
        var deferred = $q.defer();
        var sucess = function (result) {
          deferred.resolve(result);
        };
        cordova.exec(sucess, null, plugin.name, plugin.getScenePage, [offset, limit]);
        return deferred.promise;
      }
    }
});
