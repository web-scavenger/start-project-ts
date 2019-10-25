import { ToggleElement } from './ToggleElement';
import TopCircle from './TopCircle';
import FinallBtn from './FinallBtn';
const finall = () => {
    const overlay = new ToggleElement('#darkOverlay');
    const topTxt = new ToggleElement('#topFinallTxt');
    const bottomTxt = new ToggleElement('#bottomFinallTxt');
    const finallBtn = new FinallBtn('#ctaBtn');
    const changeLogo = () => {
        const logo = document.querySelector('#logo');
        logo.setAttribute('data-state', 'finall');
    };
    const init = () => {
        new TopCircle('#circle55').removeGlare();
        overlay.show()
            .then(() => {
            changeLogo();
            topTxt.show();
            bottomTxt.show();
        });
        finallBtn.show()
            .then(() => {
            finallBtn.animateBtn();
        });
    };
    init();
};
export default finall;
