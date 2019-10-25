import { ToggleElement } from './ToggleElement';
class TopCircle extends ToggleElement {
    constructor(selector) {
        super(selector);
        this.glare = document.querySelector('#glare');
        if (TopCircle._instance) {
            return TopCircle._instance;
        }
        return TopCircle._instance = this;
    }
    addGlare() {
        this.glare.setAttribute('data-active', true);
    }
    removeGlare() {
        this.glare.setAttribute('data-active', false);
    }
}
export default TopCircle;
