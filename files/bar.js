document.addEventListener('DOMContentLoaded',()=>{
    const NAV_ROOT = document.getElementById('NAV_ROOT');
    const NAV_BAR_TOGGLE = document.getElementById('NAV_BAR_TOGGLE');
    const NAV_BAR_CON = document.getElementById('NAV_BAR_CON');
    const NAVIGATION_LOGO_WIDTH = document.getElementById('NAV_LOGO').clientWidth;
    const NAVIGATION_WIDTH = NAV_BAR_CON.clientWidth;
    ((result=0)=>{
        NAV_BAR_CON.childNodes.forEach(value=>{
            result += value.clientHeight;
        })
        NAV_BAR_CON.style.setProperty('--expanded-height',result+'px');
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
    NAV_BAR_TOGGLE.addEventListener('click',() =>
        NAV_ROOT.classList.toggle('collapsed'));
    NavBarIntelliJudge();
})