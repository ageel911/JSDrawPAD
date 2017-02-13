var system;

function setup() {
    createCanvas(800, 600);
    stroke(255);
    noFill();
    system = new DrawPad();
    system.initiate();
}

function draw() {
    update();
    background(0);

    system.draw();
}

function update() {


}
