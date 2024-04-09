document.addEventListener('DOMContentLoaded',()=>{
    const NAV_ROOT = document.querySelector('.KNavigationBar');
    const NAV_BAR_TOGGLE = NAV_ROOT.querySelector('.kToggle');
    const NAV_BAR_CON = NAV_ROOT.querySelector('.kCon');
    const NAVIGATION_LOGO_WIDTH = NAV_ROOT.querySelector('.kLogo').clientWidth;
    const NAVIGATION_WIDTH = NAV_BAR_CON.clientWidth;
    (()=>{
        let expandedHeight = NAV_BAR_CON.childElementCount*48 + 'px';
        NAV_BAR_CON.style.setProperty('--expanded-height',expandedHeight);
    })()
    const NavBarIntelliJudge = () => {
        if(document.documentElement.clientWidth<NAVIGATION_WIDTH + NAVIGATION_LOGO_WIDTH +64){
            NAV_ROOT.classList.add('collapsed','short');
            NAV_ROOT.classList.remove('enough');
        } else {
            NAV_ROOT.classList.remove('collapsed','short');
            NAV_ROOT.classList.add('enough');
        }
    }
    window.addEventListener('resize',NavBarIntelliJudge);
    NAV_BAR_TOGGLE.addEventListener('click',() => {
        NAV_ROOT.classList.toggle('collapsed');
    });
    NavBarIntelliJudge();
})