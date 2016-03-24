var post = require('axios').post;
var config = require("../config");
var TOKEN_URL = "" + config.webAppUrl + '/api/tokens';

module.exports = function(password, username) {

  return post(TOKEN_URL, {
    user: {
      email: username,
      password: password
    }
  }).then(function(resp){
    return resp.data.token.unencoded
  }, function(error) {
    return Promise.reject(error);
  });
}
