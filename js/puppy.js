class puppy {

    constructor({ puppyImg }) {
        this.h = 100;
        this.w = 160;
        this.x = 0;
        this.y = height - this.h;
        this.dead = false;
        this.score = 0;
        this.jumping = false;
        this.puppyImg = (puppyImg);
        this.dna = [];
    }

    jump() {
        if (this.y === height - this.h) {
            this.jumping = true;
        }
    }

    update() {

        if (this.jumping) {
            this.y += -3;
        } else {
            this.y += 2;
        }

        if (this.y > height - this.h) {
            this.y = height - this.h;
        }

        if (this.y < height - this.h - 160) {
            this.jumping = false;
            this.y = height - this.h - 160;
        }

        //console.log(this.y, ball.y - ball.h);
        let dogBack = this.x;
        let dogBottom = this.y;
        let dogfront = this.x + this.w;
        let dogtop = this.y + this.h;

        if (dogBack <= ball.x && dogfront >= ball.x) {
            if (dogBottom <= ball.y && dogtop >= ball.y) {
                this.dead = true;
            }
        }


    }

    draw() {
        if (!this.dead) {
            tint(255, 127);
            this.score++;
            image(this.puppyImg, this.x, this.y, this.w, this.h);
        }
    }

}