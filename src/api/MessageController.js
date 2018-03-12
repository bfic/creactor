var ApiController = require('./ApiController.js');


class MessageController extends ApiController {
  constructor(obj) {
    super(obj);
  }

  static create (obj, success, failure) {
    this.post('/messages', obj, {}, function(result){
      success(result);
    }, function(result) {
      failure(result);
    });
  }

  static all (success, failure) {
    this.get('/messages/', null, {}, function(result){
      success(result);
    }, function(result) {
      failure(result);
    });
  }

  static getSingle (messageId, success, failure) {
    this.get('/messages/' + messageId, null, {}, function(result){
      success(result);
    }, function(result) {
      failure(result);
    });
  }

  static update(messageId, object, success, failure) {
    this.put('/messages/'+ messageId, object, {}, function(result){
      success(result);
    }, function(result) {
      failure(result);
    });
  }

  static delete (messageId, success, failure) {
    this.del('/messages/' + messageId, {}, {}, function(result){
      success(result);
    }, function(result) {
      failure(result);
    });
  }
};


module.exports = MessageController;