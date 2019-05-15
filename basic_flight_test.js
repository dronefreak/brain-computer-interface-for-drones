var arDrone = require('ar-drone');
var client  = arDrone.createClient();

client.takeoff();

client
  .after(2000, function() {
    this.up(1);
  })
  .after(2000, function() {
    this.animate('flipAhead',500);
  })
  .after(1000, function() {
    this.animate('flipBehind', 500);
  })
  .after(1000, function() {
    this.animate('flipLeft',500);
  })
  .after(1000, function() {
    this.animate('flipRight', 500);
  })
  .after(5000, function() {
    this.front(1.0);
  })
  .after(2000, function() {
    this.clockwise(0.5);
  })
  .after(5000, function() {
    this.back(0.8);
  })
  .after(2000, function() {
    this.land();
  });