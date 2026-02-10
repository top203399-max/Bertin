let mapSizeY;
let mapSizeX;

//stats
//let circleAmount = 3
let wins = 0
let moveAmount = 4;
let growSize = 5;

//game variables
let border = 6
let maxDrift = 1
let minDrift = -1
let allRadius = 25

//rectangle setup
let rectX = mapSizeX / 2;
let rectY = mapSizeY / 1.2;
let rectSize = 25;
let rectRangeX1;
let rectRangeY1;
let rectRangeX2;
let rectRangeY2;

//set up all the circles
let circle1X = mapSizeX / 2 + 50;
let circle1Y = mapSizeY / 2;
let radius1 = allRadius;
let circle1RangeX1;
let circle1RangeY1;
let circle1RangeX2;
let circle1RangeY2;
let circle1Drift = [0,0]

let circle2X = mapSizeX / 2 - 50;
let circle2Y = mapSizeY / 2;
let radius2 = allRadius;
let circle2RangeX1;
let circle2RangeY1;
let circle2RangeX2;
let circle2RangeY2;
let circle2Drift = [0,0]

let circle3X = mapSizeX / 2;
let circle3Y = mapSizeY / 2 + 50;
let radius3 = allRadius;
let circle3RangeX1;
let circle3RangeY1;
let circle3RangeX2;
let circle3RangeY2;
let circle3Drift = [0,0]

let circle4X = mapSizeX / 2;
let circle4Y = mapSizeY / 2 - 50;
let radius4 = allRadius;
let circle4RangeX1;
let circle4RangeY1;
let circle4RangeX2;
let circle4RangeY2;
let circle4Drift = [0,0]

let circle5X = mapSizeX / 2;
let circle5Y = mapSizeY / 2;
let radius5 = allRadius;
let circle5RangeX1;
let circle5RangeY1;
let circle5RangeX2;
let circle5RangeY2;
let circle5Drift = [0,0]

function setup() {
  if (localStorage.getItem("wins") !== null) {
  wins = Number(localStorage.getItem("wins"));
  }
  if (localStorage.getItem("moveAmount") !== null) {
  moveAmount = Number(localStorage.getItem("moveAmount"));
  }
  if (localStorage.getItem("growSize") !== null) {
  growSize = Number(localStorage.getItem("growSize"));
  }
  if (localStorage.getItem("rectSize") !== null) {
  rectSize = Number(localStorage.getItem("rectSize"));
  }
  
  
  mapSizeY = displayHeight - 20
  mapSizeX = displayWidth - 20
  createCanvas(mapSizeX, mapSizeY); 
  let button1 = createButton('1 Win | UPG Speed');
  button1.position(10, 115);
  button1.mousePressed(speedUPG);
  
  let button2 = createButton('1 Win | UPG Size');
  button2.position(10, 145);
  button2.mousePressed(sizeUPG);
  
  rectX = mapSizeX / 2;
  rectY = mapSizeY / 1.2;
  
  circle1X = mapSizeX / 2 + 50; 
  circle1Y = mapSizeY / 2; 
  circle2X = mapSizeX / 2 - 50; 
  circle2Y = mapSizeY / 2; 
  circle3X = mapSizeX / 2; 
  circle3Y = mapSizeY / 2 + 50; 
  circle4X = mapSizeX / 2; 
  circle4Y = mapSizeY / 2 - 50; 
  circle5X = mapSizeX / 2; 
  circle5Y = mapSizeY / 2;

}

function move() {
  if (keyIsDown(UP_ARROW) === true) {
    if (rectY > 0 + border) {
      rectY -= moveAmount;
    }
    else {
      circle1Y += moveAmount;
      circle2Y += moveAmount;
      circle3Y += moveAmount;
      circle4Y += moveAmount;
      circle5Y += moveAmount;
    }
  }

  if (keyIsDown(DOWN_ARROW) === true) {
    if (rectY <= mapSizeY - rectSize - border) {
      rectY += moveAmount;
    }
    else {
      circle1Y -= moveAmount;
      circle2Y -= moveAmount;
      circle3Y -= moveAmount;
      circle4Y -= moveAmount;
      circle5Y -= moveAmount;
    }
  }

  if (keyIsDown(LEFT_ARROW) === true) {
    if (rectX > 0 + border) {
      rectX -= moveAmount;
    }
    else {
      circle1X += moveAmount;
      circle2X += moveAmount;
      circle3X += moveAmount;
      circle4X += moveAmount;
      circle5X += moveAmount;
    }
  }

  if (keyIsDown(RIGHT_ARROW) === true) {
    if (rectX <= mapSizeX - rectSize - border) {
      rectX += moveAmount;
    }
    else {
      circle1X -= moveAmount;
      circle2X -= moveAmount;
      circle3X -= moveAmount;
      circle4X -= moveAmount;
      circle5X -= moveAmount;
    }
  }
}

// this will add random drift to a circle
function circle1RandomMove() {
  circle1X += circle1Drift[0]
  circle1Y += circle1Drift[1]
}

function circle2RandomMove() {
  circle2X += circle2Drift[0]
  circle2Y += circle2Drift[1]
}

function circle3RandomMove() {
  circle3X += circle3Drift[0]
  circle3Y += circle3Drift[1]
}

function circle4RandomMove() {
  circle4X += circle4Drift[0]
  circle4Y += circle4Drift[1]
}

function circle5RandomMove() {
  circle5X += circle5Drift[0]
  circle5Y += circle5Drift[1]
}

//this detects if a circle is ate
function eat1(circleRangeX1, circleRangeX2, circleRangeY1, circleRangeY2) {
  if (rectRangeX1 < circleRangeX2 && rectRangeX2 > circleRangeX1) {
    if (rectRangeY1 < circleRangeY2 && rectRangeY2 > circleRangeY1) {
      moveCircle1()
    }
  }
}

function eat2(circleRangeX1, circleRangeX2, circleRangeY1, circleRangeY2) {
  if (rectRangeX1 < circleRangeX2 && rectRangeX2 > circleRangeX1) {
    if (rectRangeY1 < circleRangeY2 && rectRangeY2 > circleRangeY1) {
      moveCircle2()
    }
  }
}

function eat3(circleRangeX1, circleRangeX2, circleRangeY1, circleRangeY2) {
  if (rectRangeX1 < circleRangeX2 && rectRangeX2 > circleRangeX1) {
    if (rectRangeY1 < circleRangeY2 && rectRangeY2 > circleRangeY1) {
      moveCircle3()
    }
  }
}

function eat4(circleRangeX1, circleRangeX2, circleRangeY1, circleRangeY2) {
  if (rectRangeX1 < circleRangeX2 && rectRangeX2 > circleRangeX1) {
    if (rectRangeY1 < circleRangeY2 && rectRangeY2 > circleRangeY1) {
      moveCircle4()
    }
  }
}

function eat5(circleRangeX1, circleRangeX2, circleRangeY1, circleRangeY2) {
  if (rectRangeX1 < circleRangeX2 && rectRangeX2 > circleRangeX1) {
    if (rectRangeY1 < circleRangeY2 && rectRangeY2 > circleRangeY1) {
      moveCircle5()
    }
  }
}

// this moves the circle after being ate
function moveCircle1() {
  rectSize += growSize;
  rectX -= growSize / 2
  rectY -= growSize / 2
  circle1X = random(0, mapSizeX);
  circle1Y = random(0, mapSizeY);
  circle1Drift = [random(minDrift, maxDrift), random(minDrift, maxDrift)]
}

function moveCircle2() {
  rectSize += growSize;
  rectX -= growSize / 2
  rectY -= growSize / 2
  circle2X = random(0, mapSizeX);
  circle2Y = random(0, mapSizeY);
  circle2Drift = [random(minDrift, maxDrift), random(minDrift, maxDrift)]
}

function moveCircle3() {
  rectSize += growSize;
  rectX -= growSize / 2
  rectY -= growSize / 2
  circle3X = random(0, mapSizeX);
  circle3Y = random(0, mapSizeY);
  circle3Drift = [random(minDrift, maxDrift), random(minDrift, maxDrift)]
}

function moveCircle4() {
  rectSize += growSize;
  rectX -= growSize / 2
  rectY -= growSize / 2
  circle4X = random(0, mapSizeX);
  circle4Y = random(0, mapSizeY);
  circle4Drift = [random(minDrift, maxDrift), random(minDrift, maxDrift)]
}

function moveCircle5() {
  rectSize += growSize;
  rectX -= growSize / 2
  rectY -= growSize / 2
  circle5X = random(0, mapSizeX);
  circle5Y = random(0, mapSizeY);
  circle5Drift = [random(minDrift, maxDrift), random(minDrift, maxDrift)]
}


// this adjusts the circle in case it goes out of bounds
function moveBack1() {
  if (circle1X > mapSizeX + radius1) {
    circle1X = 0 - radius1;
  }
  else if (circle1X < 0 - radius1) {
    circle1X = mapSizeX + radius1;
  }
  else if (circle1Y > mapSizeY + radius1) {
    circle1Y = 0 - radius1;
  }
  else if (circle1Y < 0 - radius1) {
    circle1Y = mapSizeY + radius1;
  }
}

function moveBack2() {
  if (circle2X > mapSizeX + radius2) {
    circle2X = 0 - radius2;
  }
  else if (circle2X < 0 - radius2) {
    circle2X = mapSizeX + radius2;
  }
  else if (circle2Y > mapSizeY + radius2) {
    circle2Y = 0 - radius2;
  }
  else if (circle2Y < 0 - radius2) {
    circle2Y = mapSizeY + radius2;
  }
}

function moveBack3() {
  if (circle3X > mapSizeX + radius3) {
    circle3X = 0 - radius3;
  }
  else if (circle3X < 0 - radius3) {
    circle3X = mapSizeX + radius3;
  }
  else if (circle3Y > mapSizeY + radius3) {
    circle3Y = 0 - radius3;
  }
  else if (circle3Y < 0 - radius3) {
    circle3Y = mapSizeY + radius3;
  }
}

function moveBack4() {
  if (circle4X > mapSizeX + radius4) {
    circle4X = 0 - radius4;
  }
  else if (circle4X < 0 - radius4) {
    circle4X = mapSizeX + radius4;
  }
  else if (circle4Y > mapSizeY + radius4) {
    circle4Y = 0 - radius4;
  }
  else if (circle4Y < 0 - radius4) {
    circle4Y = mapSizeY + radius4;
  }
}

function moveBack5() {
  if (circle5X > mapSizeX + radius5) {
    circle5X = 0 - radius5;
  }
  else if (circle5X < 0 - radius5) {
    circle5X = mapSizeX + radius5;
  }
  else if (circle5Y > mapSizeY + radius5) {
    circle5Y = 0 - radius5;
  }
  else if (circle5Y < 0 - radius5) {
    circle5Y = mapSizeY + radius5;
  }
}

//this adds size to the full circle
function circleSizeSetter1() {
  circle(circle1X, circle1Y, radius1);
  
  circle1RangeX1 = circle1X - radius1 / 2;
  circle1RangeX2 = circle1X + radius1 / 2;

  circle1RangeY1 = circle1Y - radius1 / 2;
  circle1RangeY2 = circle1Y + radius1 / 2;
}

function circleSizeSetter2() {
  circle(circle2X, circle2Y, radius2);
  
  circle2RangeX1 = circle2X - radius2 / 2;
  circle2RangeX2 = circle2X + radius2 / 2;

  circle2RangeY1 = circle2Y - radius2 / 2;
  circle2RangeY2 = circle2Y + radius2 / 2;
}

function circleSizeSetter3() {
  circle(circle3X, circle3Y, radius3);
  
  circle3RangeX1 = circle3X - radius3 / 2;
  circle3RangeX2 = circle3X + radius3 / 2;

  circle3RangeY1 = circle3Y - radius3 / 2;
  circle3RangeY2 = circle3Y + radius3 / 2;
}

function circleSizeSetter4() {
  circle(circle4X, circle4Y, radius4);
  
  circle4RangeX1 = circle4X - radius4 / 2;
  circle4RangeX2 = circle4X + radius4 / 2;

  circle4RangeY1 = circle4Y - radius4 / 2;
  circle4RangeY2 = circle4Y + radius4 / 2;
}

function circleSizeSetter5() {
  circle(circle5X, circle5Y, radius5);
  
  circle5RangeX1 = circle5X - radius5 / 2;
  circle5RangeX2 = circle5X + radius5 / 2;

  circle5RangeY1 = circle5Y - radius5 / 2;
  circle5RangeY2 = circle5Y + radius5 / 2;
}


function rectSizeSetter() {
  rect(rectX, rectY, rectSize);
  rectRangeX1 = rectX;
  rectRangeX2 = rectX + rectSize;

  rectRangeY1 = rectY;
  rectRangeY2 = rectY + rectSize;
}

function winCounter() {
  if (rectSize > mapSizeX + 100) {
    erase()
    noErase()
    rectSize = 25
    wins += 1
    rectX = mapSizeX / 2
    rectY = mapSizeY / 1.2
  }
}

function speedUPG() {
  if (wins >= 1) {
    moveAmount += 1
    wins -= 1
  }
}

function sizeUPG() {
  if (wins >= 1) {
    growSize += 5
    wins -= 1
  }
}

function saveProgress() {
  localStorage.setItem("wins", wins);
  localStorage.setItem("rectSize", rectSize);
  localStorage.setItem("moveAmount", moveAmount);
  localStorage.setItem("growSize", growSize);
}

function texts() {
  textSize(15)
  text("Size " + str(rectSize) , 10, 25)
  
  text("Wins " + str(wins) , 10, 50)
  
  text("Grow Amount " + str(growSize) , 10, 75)
  
  text("Speed " + str(moveAmount) , 10, 100)
}

function draw() {
  background(220);
  
  //circle
  moveBack1()
  moveBack2()
  moveBack3()
  moveBack4()
  moveBack5()

  fill("green")
  circleSizeSetter1()
  circleSizeSetter2()
  circleSizeSetter3()
  circleSizeSetter4()
  circleSizeSetter5()
  
  fill("red")
  rectSizeSetter()
  
  fill("black")
  texts() 
  
  eat1(circle1RangeX1, circle1RangeX2, circle1RangeY1, circle1RangeY2)
  eat2(circle2RangeX1, circle2RangeX2, circle2RangeY1, circle2RangeY2)
  eat3(circle3RangeX1, circle3RangeX2, circle3RangeY1, circle3RangeY2)
  eat4(circle4RangeX1, circle4RangeX2, circle4RangeY1, circle4RangeY2)
  eat5(circle5RangeX1, circle5RangeX2, circle5RangeY1, circle5RangeY2)
  
  circle1RandomMove()
  circle2RandomMove()
  circle3RandomMove()
  circle4RandomMove()
  circle5RandomMove()
  
  winCounter()
  move()
  saveProgress()
}