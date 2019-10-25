import { ToggleElement } from './ToggleElement';
import getBtnLink from './lib/getBtnLink';
const addInstallBtnLink = () => {
    getBtnLink()
        .then((link) => {
        console.log(link);
        mraid.open(link);
    });
};
class FinallBtn extends ToggleElement {
    constructor(id) {
        super(id);
        this.clickHandler();
    }
    animateBtn() {
        this.item.setAttribute('data-animate', true);
    }
    clickHandler() {
        this.item.onclick = () => addInstallBtnLink();
    }
}
export default FinallBtn;
