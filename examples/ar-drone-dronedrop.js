var arDrone = require('ar-drone');
var client  = arDrone.createClient();

require('dronedrop').dropify(client);

client.takeoff();

client
  .after(5000, function() {
    this.version(function(err, data) {
      console.log("dronedrop firmware version:", data);
    });
    this.close();
  })
  .after(5000, function() {
    this.drop();
  })
  .after(5000, function() {
    this.stop();
    this.land();
  });
