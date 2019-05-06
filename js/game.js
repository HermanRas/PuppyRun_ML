let totalPuppies = 5;
let memorySpan = 185;

function setup() {
    //set vars
    this.gameSize = createVector(800, 400);
    this.puppyImg = loadImage('Img/puppy.png');
    this.grassImg = loadImage('Img/grass.png');
    this.ballImg = loadImage('Img/ball.png');

    //create objects
    createCanvas(this.gameSize.x, this.gameSize.y);
    grass = new grass({ 'grassImg': this.grassImg });
    ball = new ball({ 'ballImg': this.ballImg });
    puppies = new puppies({
        'puppiesCount': totalPuppies,
        'puppyImg': this.puppyImg,
        'memorySpan': memorySpan
    });
}


function draw() {
    //fill picture
    background(224, 234, 249);

    //update locations of objects
    ball.update();
    puppies.update();

    //draw new locations
    grass.draw();
    ball.draw();
    puppies.draw();
}
