function setup() {
    createCanvas(500,500); // canvas width/height
    background(0) // Make background black
}

// Start draw function code black
function draw(){
    fill(255); // set fill color
    ellipse(400, 250, 200, 200); 
}
// End of the code block













let moving_size = 80;
let static_size = 20;
function setup() {
 createCanvas(windowWidth, windowHeight);
 frameRate(15)
}
function draw() {
    //background
    background(random(230,240));
    //left
    noStroke();
    fill(10,143,53);
    beginShape();
    circle(140, 200, 200);
    fill (235, 199, 237)
    endShape(CLOSE);
    //right
    noStroke();
    //bottom
    noFill();
    stroke(130);
    strokeWeight(2);
    //mouse interactions

    fill(230,230,163)
    circle(94,180,40);
    circle(180,180,40);
    triangle(200, 330, 309, 330, 230, 300);
    fill(235,199,240);
    
}

