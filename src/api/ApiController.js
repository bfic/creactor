require('./../helpers/utils');
var $ = require('jquery');

/* We are keeping API address and port in config.js file */
var config = require('./../config');

class ApiController {

    static get url() {
        if (config.apiPort)
            return config.apiUrl + ':' + config.apiPort;
        return config.apiUrl;
    }

    static CallApi (method, type, inputData, headers, success, failure) {
        var targetUrl = this.url + method;
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
        $.ajax({
            type: type,
            dataType: "json",
            contentType: "application/json",
            data: inputData,
            url: targetUrl,
            headers: headers,
            crossDomain: true,
            success: function(data){  
                success(data);   
            },
            error: function(error){
                failure(error);
            }
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