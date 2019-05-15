var arDrone = require('ar-drone');
var client  = arDrone.createClient();

client.takeoff();

client
  .after(20, function() {
    this.up(0.2);
  })
  
  .after(50, function() {
    this.front(0.1);
  })
  .after(20, function() {
    this.clockwise(0.1);
  })
  .after(500, function() {
    this.back(0.2);
  })
  .after(20, function() {
    this.land();
  });