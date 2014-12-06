# DroneDrop.js

JS client lib for DroneDrop (http://dronedrop.io)

## Nodecopter Example:

```javascript
var dropper = require('dronedrop');
var arDrone = require('ar-drone');

dropper.init(function() {
  var client  = arDrone.createClient();
  client.takeoff();

  client
    .after(1000, function() {
      dropper.grab();
    })
    .after(1000, function() {
      dropper.drop();
    })
    .after(1000, function() {
      this.stop();
      this.land();
    });
});
```

## Standalone Example:

```javascript
var dropper = require("dronedrop");

dropper.grab();

setTimeout(function() {
  dropper.drop();
}, 500);
```

## Functions

### drop

Opens DroneDrop all the way. DROP!

```
var callback = function(err) {
};

dronedrop.drop(callback);
```

### load

Moves DroneDrop to "almost closed". Good for loading your payload before takeoff.

```
var callback = function(err) {
};

dronedrop.load(callback);
```

### grab

Grab something by closing DroneDrop as far as it goes. Now you're ready for takeoff!

```
var callback = function(err) {
};

dronedrop.grab(callback);
```

### version

Return the version of DroneDrop running on the drone.

```
var callback = function(err, ver) {
};

dronedrop.version(callback);
```

## License

Copyright (c) 2014 The Hybrid Group. Licensed under the Apache 2.0 license.

