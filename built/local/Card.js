import anime from 'animejs';
import { Promise } from 'es6-promise';
import { ToggleElement } from './ToggleElement';
import NumbersCounter from './NumbersCounter';
import finall from './finall';
const counter = new NumbersCounter();
class Card {
  constructor(cardId) {
    this.cardId = cardId;
    this.card = document.getElementById(cardId);
    this.number = this.card.querySelector('.searchNumber');
    this.glare = this.card.querySelector('.glare');
    this.canClick = true;
  }
  getChildrenTemplate(element) {
    return `#${this.cardId} ${element}`;
  }
  removeGlareAnime() {
    this.glare.setAttribute('data-anime', 'false');
  }
  animeGlare() {
    this.glare.setAttribute('data-anime', 'true');
  }
  removeNumberAnime() {
    this.number.setAttribute('data-anime', 'false');
  }
  animeNumber() {
    this.number.setAttribute('data-anime', 'true');
  }
  changeNumberState() {
    this.number.setAttribute('data-active', 'true');
    this.removeGlareAnime();
    this.removeNumberAnime();
    return new Promise((res) => {
      setTimeout(() => res({ animated: true }), 500);
    });
  }
  onClick() {
    if (this.canClick) {
      this.canClick = false;
      const overlaySelector = this.getChildrenTemplate('.cardOverlay');
      const overlay = new ToggleElement(overlaySelector);
      const popUpSelector = this.getChildrenTemplate('.bingoPopUp');
      this.changeNumberState()
        .then(() => {
          overlay.show();
        })
        .then(() => {
          anime({
            targets: popUpSelector,
            scale: [
              { value: 0, duration: 0 },
              { value: 1.2, duration: 350, easing: 'easeInQuad' },
              { value: 1, duration: 150, easing: 'easeInQuad' }
            ],
            complete() {
              if (counter.increaseCounter())
                finall();
            }
          });
        });
    }
  }
  clickActiveNumberHandler() {
    this.number.onclick = () => this.onClick();
  }
  animateActiveNumber() {
    this.animeNumber();
    this.clickActiveNumberHandler();
    this.animeGlare();
  }
}
;
export default Card;
