class puppies {

    constructor({ puppiesCount, puppyImg, memorySpan }) {
        this.litter = [];
        this.jumpRate = 0.995;
        this.counter = 0;
        for (let i = 0; i < puppiesCount; i++) {
            this.litter[i] = new puppy({ 'puppyImg': puppyImg });
            this.litter[i].dna = new dna({ 'memorySpan': memorySpan });
        }
    }

    update() {
        let puppiesAlive = 0
        for (let i = 0; i < totalPuppies; i++) {
            let jumpTrigger = this.litter[i].dna.genes[this.counter];
            if (jumpTrigger > this.jumpRate) {
                this.litter[i].jump();
            }
            this.litter[i].update();
            if (!this.litter[i].dead) {
                puppiesAlive++;
            }
        }
        if (puppiesAlive === 0) {
            let bestPuppyScore = 0;
            let bestPuppyDna = [];
            for (let i = 0; i < totalPuppies; i++) {
                if (this.litter[i].score > bestPuppyScore) {
                    bestPuppyDna = this.litter[i].dna;
                    bestPuppyScore = this.litter[i].score;
                }
            }
        }
        if (memorySpan === this.counter) {
            this.counter = 0;
        }
    }

    draw() {
        for (let i = 0; i < totalPuppies; i++) {
            this.litter[i].draw();
        }
        textSize(32);
        text('memorySpan: ' + this.counter + '/' + memorySpan, 10, 30);
        this.counter++;
    }

}