class puppies {

    constructor({ puppiesCount, puppyImg }) {
        this.litter = [];
        for (let i = 0; i < puppiesCount; i++) {
            this.litter[i] = new puppy({ 'puppyImg': puppyImg });
        }
    }

    update() {
        for (let i = 0; i < totalPuppies; i++) {
            this.litter[i].update();
        }
    }

    draw() {
        for (let i = 0; i < totalPuppies; i++) {
            this.litter[i].draw();
        }
    }

}