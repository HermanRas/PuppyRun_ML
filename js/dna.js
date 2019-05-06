class dna {
    constructor({ memorySpan }) {
        this.genes = [];
        for (let i = 0; i < memorySpan; i++) {
            this.genes[i] = random(0, 1);
        }
    }
}
