var ApiController = require('./ApiController.js');


class MessageController extends ApiController {
  constructor(obj) {
    super(obj);
  }

  static create (obj, success, failure) {
    this.post('/workspaces/' + workspaceUrl + '/projects/' + projectId + '/tasks', obj, {}, function(result){
      success(result);
    }, function(result) {
      failure(result);
    });
  }

  static all (success, failure) {
    this.get('/workspaces/' + workspaceUrl + '/projects/' + projectId + '/tasks', null, {}, function(result){
      success(result);
    }, function(result) {
      failure(result);
    });
  }

  static getSingle (messageId, success, failure) {
    this.get('/workspaces/' + workspaceUrl + '/projects/' + projectId + '/tasks/' + taskId, null, {}, function(result){
      success(result);
    }, function(result) {
      failure(result);
    });
  }

  static update(messageId, object, success, failure) {
    this.put('/workspaces/' + workspaceUrl + '/projects/' + projectId + '/tasks/' + taskId, object, {}, function(result){
      success(result);
    }, function(result) {
      failure(result);
    });
  }

  static delete (messageId, projectId, taskId, success, failure) {
    this.del('/workspaces/' + workspaceUrl + '/projects/' + projectId + '/tasks/' + taskId, {}, {}, function(result){
      success(result);
    }, function(result) {
      failure(result);
    });
  }
};


module.exports = MessageController;