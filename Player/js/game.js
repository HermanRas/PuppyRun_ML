

function setup() {
    //set vars
    this.gameSize = createVector(800, 400);
    this.puppyImg = loadImage('Img/puppy.png');
    this.grassImg = loadImage('Img/grass.png');
    this.ballImg = loadImage('Img/ball.png');



    //create objects
    createCanvas(this.gameSize.x, this.gameSize.y);
    grass = new grass({ 'grassImg': this.grassImg });
    puppy = new puppy({ 'puppyImg': this.puppyImg });
    ball = new ball({ 'ballImg': this.ballImg });
}


function draw() {
    //fill picture
    background(224, 234, 249);

    //chack for jump
    if (keyIsDown(32)) {
        puppy.jump();
    }

    //update locations of objects
    ball.update();
    puppy.update();

    //draw new locations
    grass.draw();
    puppy.draw();
    ball.draw();
}
