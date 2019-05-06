class ball {

    constructor({ ballImg }) {
        this.h = 100;
        this.w = 120;
        this.x = width - this.w;
        this.y = height - this.h;
        this.moveSpeed = 4;
        this.ballImg = (ballImg);
    }

    update() {
        this.x -= this.moveSpeed;
        if (this.x + this.w < 0) {
            this.x = width;
        }
    }

    draw() {
        // fill(0);
        // rect(this.x, this.y, this.w, this.h);
        tint(255);
        image(this.ballImg, this.x, this.y, this.w, this.h);
    }

}