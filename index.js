var request = require('request');

var DroneDrop = function() {
  this.host = '192.168.1.1';
  this.port = '8080'
};

DroneDrop.prototype.createClient = function(client) {
	var that = this;
	this.host = client._options.ip || '192.168.1.1';

	client['drop'] = that.drop;
	client['load'] = that.load;
	client['close'] = that.close;
};

DroneDrop.prototype.connect = function(host, port) {
	this.host = host || '192.168.1.1';
	this.port = port || '8080';
};

DroneDrop.prototype.drop = function() {
	this._sendCommand('drop');
};

DroneDrop.prototype.load = function() {
	this._sendCommand('load');
};

DroneDrop.prototype.close = function() {
	this._sendCommand('close');
};

DroneDrop.prototype._sendCommand = function(command) {
	console.log(command);
	request.get(this.host + ':' + this.port + '/api/commands/' + command);
};

module.exports = new DroneDrop();
