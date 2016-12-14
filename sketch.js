// Preparatory study for interaction pattern:
// BOMB DROPPING (simple implementation)
// This sketch demonstrates how to simulate elements dropping from the top.
// No gravitational accelleration is implemented.

// How it works:
// Everytimes the user performs a click, an array is updated and a new element is added.
// Those elements correspond to the bombs falling from the top of the window.
// The X positions remain the same, while the Y positions are updated each time the DRAW is called.
// An ellipse is then drawn depending on those coordinates.

//create a new array
var bombs = [];

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(35,15,43);
  
  textSize(18);
  textAlign(CENTER);
  fill(242,29,65)
  text('CLICK FOR DROPPING',width/2,height/2)
  
  //iterate on the array
  for(var i=0; i< bombs.length; i++) {
    var fallingSpeed = 5;
    
    // Increase the single bomb vertical position
    bombs[i].y += fallingSpeed;
    
    // Create a new ellipse using the x and y properties of the bomb object
    // as defined in line #43.
    fill(235,235,188)
    noStroke();
    ellipse(bombs[i].x, bombs[i].y, height*0.1);
  }
  
  
  // Ideally at the end of the sketch:
  // remove elements from array when they go out of the window
  // (not a minimum requirement, just useful for better performances)
  for (var i=bombs.length-1; i>= 0; i--){
    if (bombs[i].y > height){
      bombs.splice(i,1);
    }
  }
}

function mousePressed() {
  var bombsAmount = 1; // how many bombs will be dropped every time a click happens
  
  for (var i=0; i<bombsAmount; i++) {
      // Create an object representing one bomb.
      // oOject properties are defined by "name" : value
      var newBomb = {
        'x': random(0,width),  // properties are comma separated
        'y': 0
      };
      // The object is added to the bombs array.
      append(bombs, newBomb);   
  }
}
