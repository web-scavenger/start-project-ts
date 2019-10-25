import { Promise } from 'es6-promise';
export class ToggleElement {
    constructor(selector) {
        this.item = document.querySelector(selector);
    }
    show() {
        this.item.setAttribute('data-show', true);
        return new Promise((res) => {
            setTimeout(() => res({ animated: true }), 350);
        });
    }
    hide() {
        this.item.setAttribute('data-show', false);
    }
}
