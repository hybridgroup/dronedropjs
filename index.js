module.exports = {
  createClient: function(client) {
    client['drop'] = function() {
    	console.log('drop');
    };

    client['load'] = function() {
    	console.log('load');
    };

    client['close'] = function() {
    	console.log('close');
    };
  }
};
