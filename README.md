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
      dropper.version(function(err, data) {
        console.log("dronedrop firmware version:", data);
      });
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
var dronedrop = require("dronedrop");

dronedrop.grab();

setTimeout(function() {
  dronedrop.drop();
}, 500);
```

## Functions

### drop

Opens DroneDrop all the way. DROP!

```
drop();
```

### load

Moves DroneDrop to "almost closed". Good for loading your payload before takeoff.

```
load();
```

### grab

Grab something by closing DroneDrop as far as it goes. Now you're ready for takeoff!

```
grab();
```

### version

Return the version of DroneDrop running on the drone.

```
version();
```

## License

Copyright (c) 2014 The Hybrid Group. Licensed under the Apache 2.0 license.

