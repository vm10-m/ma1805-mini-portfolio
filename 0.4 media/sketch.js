let img ; 

function preload() {
    img = loadImage("Antenna.jpg");
    hum = loadSound("humm.wav");
    capture = createCapture(VIDEO);
    capture.size(320, 240);
    capture.hide();

}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(220);
    image (img,0,0,)
    circle (50,50,50)
    image capture (200,200,320,240)
}

function mouseclicked () {
    hum.loop();
    hum.amp (0.2);
    get AudioContext().resume();
}

