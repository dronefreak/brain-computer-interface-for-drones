var arDrone = require('ar-drone');
var client = arDrone.createClient();


const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
  // key.name='k';
  if (key.name === 'w') {
    client.takeoff();
    console.log('drone is taking off.....');

  }
  else if (key.name === 's') {
  	client.land();
  	console.log('drone is landing....');
  }
   else if (key.name === 'a') {
  	client.front(0.2); 
    client
  .after(2000, function() {
    this.stop(0.2); 
  })
  	console.log('drone is forwarding....');
  }
   else if (key.name === 'd') {
    client.back(0.2);
    client
  .after(2000, function() {
    this.stop(0.2);  
  })
    console.log('drone is reversing....');
  }
  else if (key.name === 'q') {
    client.clockwise(0.2);
     client
  .after(2000, function() {
    this.stop(0.2);  
    
   
  })
    console.log('drone is rotating....');
  }
    else if (key.name === 'k') {
    client.up(0.2);
     client
  .after(2000, function() {
    this.stop(0.2);  
    
     
  })
    console.log('drone is upwards....');
  }  else if (key.name === 'l') {
    client.down(0.2);
     client
  .after(2000, function() {
    this.stop(0.2);  
    
     
  })
    console.log('drone is downwards....');
  }


   else {
    console.log(`You pressed the "${str}" key`);
    console.log('BM')
    console.log();
    console.log(key);
    console.log();
  }
});
console.log('Press any key...');