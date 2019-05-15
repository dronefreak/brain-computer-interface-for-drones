var arDrone = require('ar-drone');
var client = arDrone.createClient();
client.takeoff();

client
 .after(5000, function() {
  this.land();
  });