/* Here we have some helper methods for cookies and localStorage */
require('./../helpers/utils');

/* We are storing API address and port in config.js file */
var config = require('./../config');

class ApiController {

  static get url() {
    if (config.apiPort)
      return config.apiUrl + ':' + config.apiPort;
    return config.apiUrl;
  }

  static CallApi (method, type, inputData, headers, success, failure) {
    var targetUrl = this.url + method;

        /* Adding an access token targetUrl for GET and in body for other methods 
        if (type !== 'GET') {
            targetUrl += "?access_token=" + ApiController.accessToken;
            inputData = JSON.stringify(inputData);
        } else {
            if (inputData) {
                inputData.access_token = ApiController.accessToken;
            } else {
                inputData = {};
                inputData.access_token = ApiController.accessToken;
            }
        }
        */

        fetch(targetUrl, {
          method: type,
          headers: headers,
          body: inputData,
          mode: 'cors',
        })
        .then(
          function(response) {
            if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' + response.status);
              failure(response);
              return;
            }

            success(response);

            // Examine the text in the response
            response.json().then(function(data) {
              console.log(data);
              success();
            });
          }
        )
        .catch(function(err) {
          console.log('Fetch Error :-S', err);
          failure();
        });
      };

      static get accessToken () {
        return getLocalStorage('access_token');
      };

      static set accessToken(value) {
        setLocalStorage('access_token', value, 60);
      };

      static get (method, inputData, headers, success, failure) {
        this.CallApi(method, "GET", inputData, headers, success, failure);
      };

      static post (method, inputData, headers, success, failure) {
        this.CallApi(method, "POST", inputData, headers, success, failure);
      };

      static patch (method, inputData, headers, success, failure) {
        this.CallApi(method, "PATCH", inputData, headers, success, failure);
      };

      static put (method, inputData, headers, success, failure) {
        this.CallApi(method, "PUT", inputData, headers, success, failure);
      };

      static del (method, inputData, headers, success, failure) {
        this.CallApi(method, "DELETE", inputData, headers, success, failure);
      };

    }

    module.exports = ApiController;