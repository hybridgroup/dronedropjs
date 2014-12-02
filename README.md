# DroneDrop.js

JS client lib for DroneDrop (http://dronedrop.io)

## Example:

```
var arDrone = require('ar-drone');
var client  = arDrone.createClient();

var dronedrop = require('dronedrop');
dronedrop.createClient(client);

client.takeoff();

client
  .after(5000, function() {
    this.front(0.1);
  })
  .after(3000, function() {
    this.drop();
    this.back(0.1);
  })
  .after(3000, function() {
    this.stop();
    this.land();
  });
```

## Functions

```
// Opens DroneDrop all the way. DROP!
drop();
```

```
// Moves DroneDrop to "almost closed". Good for loading your payload
load();
```

```
// Closes DroneDrop as far as it goes. Now you're ready for takeoff!
close();
```


