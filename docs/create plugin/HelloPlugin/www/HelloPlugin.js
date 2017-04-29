/**
 * Created by admin on 2017/4/10.
 */
var exec = require('cordova/exec');

module.exports = {

  show: function (message) {

    exec(null,null, "HelloPlugin", "hello", [message]);
  }

};
