var arDrone = require('ar-drone');
var client = arDrone.createClient();


const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
  // key.name='k';
  if (key.name === 'w') 
  {
    client.takeoff();
    console.log('drone is taking off.....');

  }
  else if (key.name === 's') 
  {
  	client.land();
  	console.log('drone is landing....');
  }
   else if (key.name === 'a') 
   {
  	client.up(0.2); 
    client.after(2000, function() {
    this.stop(0.2); 
  })
  	console.log('drone is moving up....');
  }
   else if (key.name === 'd') {
    client.down(0.2);
    client.after(2000, function() {
    this.stop(0.2);  
  })
    console.log('drone is coming down....');
  }
  else if (key.name === 'l'){
    client.left(0.2);
    client.after(2000, function() {
      this.stop(0.2);
    })
    console.log('drone is going left...');
  }
  else if (key.name === 'r') {
      client.right(0.2);
      client.after(2000, function() {
        this.stop(0.2);
      })
      console.log('drone is going right...');
    }
  
   else {
    console.log(`You pressed the "${str}" key`);
    console.log('Try again!!')
    console.log();
    process.exit();
    console.log(key);
    console.log();
  }
})
console.log('Press any key...');