'use strict';

// pinout uses actuall GPIO pin not physical pin.

var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var LED = new Gpio(18, 'out'); //use GPIO pin 18, and specify that it is output
var blinkInterval = setInterval(blinkLED, 250); //run the blinkLED function every 250ms

function blinkLED() { //function to start blinking
  if (LED.readSync() === 0) { //check the pin state, if the state is 0 (or off)
    LED.writeSync(1); //set pin state to 1 (turn LED on)
    console.log('LED on');
  } else {
    LED.writeSync(0); //set pin state to 0 (turn LED off)
    console.log('LED off');
  }
}

function endBlink() { //function to stop blinking
  clearInterval(blinkInterval); // Stop blink intervals
  LED.writeSync(0); // Turn LED off
  LED.unexport(); // Unexport GPIO to free resources
  console.log('Blink finished.');
}

setTimeout(endBlink, 5000); //stop blinking after 5 seconds