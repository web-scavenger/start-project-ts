class NumbersCounter {
    constructor() {
        this.cardsLimit = 0;
        this.counter = 0;
        if (NumbersCounter._instance) {
            return NumbersCounter._instance;
        }
        NumbersCounter._instance = this;
    }
    setCards(limit) {
        this.cardsLimit = limit;
    }
    checkCounterLimit() {
        return this.cardsLimit <= this.counter;
    }
    increaseCounter() {
        this.counter++;
        return this.checkCounterLimit();
    }
}
export default NumbersCounter;
