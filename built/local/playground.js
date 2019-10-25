import TopCircle from './TopCircle';
import NumbersCounter from './NumbersCounter';
import Card from './Card';
const counter = new NumbersCounter();
const playground = {
    circles: null,
    cardDOM: 'card',
    cardsCounter: 4,
    cardsDOMArr: [],
    animeCardsNumbers() {
        for (let i = 1; i <= this.cardsCounter; i++) {
            const card = new Card(`${this.cardDOM}${i}`);
            this.cardsDOMArr = [...this.cardsDOMArr, card];
            card.animateActiveNumber();
        }
        counter.setCards(this.cardsDOMArr.length);
    },
    initTopBarCircle() {
        this.circles = new TopCircle('#circle55');
        this.circles.show()
            .then(() => this.circles.addGlare())
            .then(() => this.animeCardsNumbers());
    },
    init() {
        this.initTopBarCircle();
    }
};
export default playground;
