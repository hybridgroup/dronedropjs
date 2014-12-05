var dronedrop = require("dronedrop");

dronedrop.close();

setTimeout(function() {
  dronedrop.drop();
}, 500);

dronedrop.version(function(err, data) {
  console.log(data);
  console.log(err);
});
