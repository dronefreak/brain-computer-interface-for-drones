

var arDrone = require('ar-drone');
var client = arDrone.createClient();

const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
  
    if (key.name === 'e') {
  	 client.takeoff();
     c
  	 console.log(`drone taking offff...`);
    }
  	 else if (key.name === 'q')
	   {
	  	  client.land();
	  	  console.log(`drone is landingggg...`);
        break;
	   }
      else if(key.name==='a')
        {client.left();
          console.log(`drone left`);
        }
      else if(key.name==='d')
        {client.right();
          console.log(`drone right`);
        }
      else if(key.name==='w')
        {client.front();
          console.log(`drone front`);
        }
      else if(key.name==='s')
      {
        client.back();
        console.log(`drone back`);
      }



  else {
      console.log(`You pressed the "${str}" key`);
      console.log(`wrong key`);
      console.log();
      process.exit();
      console.log(key);
      console.log();
    }
  
});
console.log('Press any key...');

