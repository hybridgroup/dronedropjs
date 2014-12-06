var request = require('request');

var DroneDrop = function() {
  this.host = '192.168.1.1';
  this.port = '8080';
};

DroneDrop.prototype.init = function(cb) {
  var that = this;
  that._sendCommand('disconnect', function(err, data) {
    if (err == null && data == null) {
      that.init(cb);
    } else {
      cb(err, data);
    }
  });
};

DroneDrop.prototype.drop = function(cb) {
  this._sendCommand('drop', cb);
};

DroneDrop.prototype.load = function(cb) {
  this._sendCommand('load', cb);
};

DroneDrop.prototype.grab = function(cb) {
  this._sendCommand('grab', cb);
};

DroneDrop.prototype.version = function(cb) {
  this._sendCommand('version', cb);
};

DroneDrop.prototype._sendCommand = function(command, cb) {
  request('http://' + this.host + ':' + this.port + '/api/commands/' + command, 
    function (error, response, body) {
      if ('function' === typeof(cb)) { 
        if (!error && response.statusCode == 200) {
          cb(null, JSON.parse(body).result);
        } else {
          cb(error)
        }
      }
    }
  )
};

module.exports = new DroneDrop();
