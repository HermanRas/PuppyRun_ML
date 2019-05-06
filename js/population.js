class puppies {

    constructor({ puppiesCount, puppyImg, memorySpan }) {
        this.generation = 0;
        this.mutationRate = 0.4;
        this.bestPuppyScore = 0;
        this.bestPuppyDna = [];
        this.puppiesCount = puppiesCount;
        this.litter = [];
        this.jumpRate = 0.995;
        this.counter = 0;
        for (let i = 0; i < this.puppiesCount; i++) {
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
            let bestPuppyScore = this.bestPuppyScore;
            let bestPuppyDna = this.bestPuppyDna;
            for (let i = 0; i < totalPuppies; i++) {
                if (this.litter[i].score > bestPuppyScore) {
                    bestPuppyDna = this.litter[i].dna;
                    bestPuppyScore = this.litter[i].score;
                }
            }

            this.litter = [];
            ball.x = width;
            if (this.bestPuppyScore < bestPuppyScore) {
                this.bestPuppyScore = bestPuppyScore;
                this.bestPuppyDna = bestPuppyDna;
            }
            this.generation++;
            console.log('gen: ' + this.generation + ' score:' + this.bestPuppyScore);
            for (let i = 0; i < this.puppiesCount; i++) {
                this.litter[i] = new puppy({ 'puppyImg': puppyImg });
                this.litter[i].dna = bestPuppyDna;

                //set mutation
                let x = random(0, 1);
                if (x < this.mutationRate) {
                    console.log('random new puppy:' + i);
                    this.litter[i].dna = new dna({ 'memorySpan': memorySpan });
                }
            }
        }
        if (memorySpan === this.counter) {
            this.counter = 0;
        }
    }

    draw() {
        let score = 0;
        for (let i = 0; i < totalPuppies; i++) {
            if (score < this.litter[i].score) {
                score = this.litter[i].score;
            }
            this.litter[i].draw();
        }
        textSize(32);
        text('Best Score: ' + this.bestPuppyScore + '  |  Generation: ' + this.generation + '  |  # Score:  ' + score, 10, 30);
        this.counter++;
    }

}