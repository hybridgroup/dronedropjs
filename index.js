var request = require('request');

var DroneDrop = function() {
  this.host = '192.168.1.1';
  this.port = '8080';
};

DroneDrop.prototype.drop = function(cb) {
  this._sendCommand('drop', "", cb);
};

DroneDrop.prototype.load = function(cb) {
  this._sendCommand('load', "", cb);
};

DroneDrop.prototype.grab = function(cb) {
  this._sendCommand('grab', "", cb);
};

DroneDrop.prototype.version = function(cb) {
  this._sendCommand('version', "", cb);
};

DroneDrop.prototype.commander = function(enabled, cb) {
  this._sendCommand('commander', {enable: enabled}, cb);
};

DroneDrop.prototype.config = function(config, cb) {
  this._sendCommand('config', config, cb);
};

DroneDrop.prototype._sendCommand = function(command, payload, cb) {
  request(
    {
      method: 'POST',
      url: 'http://' + this.host + ':' + this.port + '/api/commands/' + command,
      headers: {'content-type': 'application/json'},
      json: true,
      body: payload
    }, function (error, response, body) {
      if ('function' === typeof(cb)) { 
        if (!error && response.statusCode == 200) {
          cb(null, body.result);
        } else {
          cb(error)
        }
      }
    }
  )
};

module.exports = new DroneDrop();
