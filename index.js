var request = require('request');

var DroneDrop = function() {
  this.host = '192.168.1.1';
};

DroneDrop.prototype.createClient = function(client) {
	var that = this;
	// TODO: get host from client

	client['drop'] = that.drop;
	client['load'] = that.load;
	client['close'] = that.close;
};

DroneDrop.prototype.connect = function(host) {
	this.host = host;
};

DroneDrop.prototype.drop = function() {
	console.log('drop');
	request(this.host + '/api/commands/drop');
};

DroneDrop.prototype.load = function() {
	console.log('load');
	request(this.host + '/api/commands/load');
};

DroneDrop.prototype.close = function() {
	console.log('close');
	request(this.host + '/api/commands/close');
};

module.exports = new DroneDrop();
