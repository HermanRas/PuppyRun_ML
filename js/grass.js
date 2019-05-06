class grass {

    constructor({ grassImg }) {
        this.h = 60;
        this.w = 200;

        this.grassImg = (grassImg);
    }

    update() {

    }

    draw() {
        image(this.grassImg, 0, height - this.h, this.w, this.h);
        image(this.grassImg, 0 + this.w * 1, height - this.h, this.w, this.h);
        image(this.grassImg, 0 + this.w * 2, height - this.h, this.w, this.h);
        image(this.grassImg, 0 + this.w * 3, height - this.h, this.w, this.h);
    }

}