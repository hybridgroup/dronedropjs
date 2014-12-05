var request = require('request');

var DroneDrop = function(opts) {
  var host = '192.168.1.1' || opts.host;
  var port = '8080' || opts.port;
  this.dronedrop = { 'host': host, 'port': port };
};

DroneDrop.prototype.dropify = function(client) {
	this.dronedrop.host = client._options.ip || '192.168.1.1';

	client['drop'] = this.drop;
	client['load'] = this.load;
	client['close'] = this.close;
	client['version'] = this.version;
	client['_sendCommand'] = this._sendCommand;
  client['dronedrop'] = this.dronedrop;
};

DroneDrop.prototype.drop = function(cb) {
	this._sendCommand('drop', cb);
};

DroneDrop.prototype.load = function(cb) {
	this._sendCommand('load', cb);
};

DroneDrop.prototype.close = function(cb) {
	this._sendCommand('close', cb);
};

DroneDrop.prototype.version = function(cb) {
	this._sendCommand('version', cb);
};

DroneDrop.prototype._sendCommand = function(command, cb) {
  request('http://' + this.dronedrop.host + ':' + this.dronedrop.port + '/api/commands/' + command, 
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
