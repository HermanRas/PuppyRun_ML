class ball {

    constructor({ ballImg }) {
        this.h = 100;
        this.w = 120;
        this.x = width;
        this.y = height - this.h;
        this.moveSpeed = 5;
        this.ballImg = (ballImg);
    }

    update() {
        this.x -= this.moveSpeed;
        if (this.x + this.w < 0) {
            this.x = width;
        }
    }

    draw() {
        tint(255);
        image(this.ballImg, this.x, this.y, this.w, this.h);
    }

}