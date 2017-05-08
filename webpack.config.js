/**
 * Created by duocai on 2017/5/8.
 */

module.exports = {
  entry: './www/js/soap-src.js',
  output: {
    filename: 'soap.js'
  },
  node: {
    fs: "empty",
    tls: "empty",
    net: "empty"
  }
};
