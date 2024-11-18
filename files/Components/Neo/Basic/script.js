(function () {
    let _M_ = false;['Android', 'iPhone', 'Mobi', 'webOS', 'iPod', 'BlackBerry'].forEach(v => navigator.userAgent.includes(v) && (_M_ = true));

    const Q = (v, s) => v.querySelector(s),
        D = document;
    const debug = () => D.body.setAttribute('debug', 0);
    const mobile = () => {
        _M_ = !_M_; D.documentElement.setAttribute('isMobile', _M_);
    }
    D.documentElement.setAttribute('isMobile', _M_);
    const { documentElement: root } = document;
    if (navigator.userAgent.includes('Android')) root.classList.add('Android');
    window.SINGLE_REM = parseInt(window.getComputedStyle(document.documentElement).fontSize);
})();

(function (window, undefined) {
    window.___usedLocation = [window.location.href];
    window.onpopstate = function(){
        if(___usedLocation.includes(window.location.href)){
            window.Reload.goTo(window.location.href);
        }
    };
    const DOMParserI = new DOMParser();
    window.Reload = {
        goTo: async function (url) {
            let content = await (await fetch(url)).text();
            let newDocument = DOMParserI.parseFromString(content, 'text/html');
            // set url
            window.history.pushState('', '', url);
            !___usedLocation.includes(url) && ___usedLocation.push(url);
            // process head.
            let newTitle = newDocument.head.querySelector('title').innerHTML;
            let scripts = [], styles = [], metas = [], links = [];
            let unusedNodes = [];
            for (let childNode of newDocument.head.childNodes) {
                if (childNode.nodeType !== 1) continue;
                switch (childNode.nodeName) {
                    case 'META':
                        if (!childNode.name || !childNode.content) break;
                        metas.push({
                            name: childNode.name,
                            content: childNode.content
                        });
                        break;
                    case 'STYLE':
                        styles.push(childNode.innerHTML);
                        break;
                    case 'SCRIPT':
                        if (childNode.src) {
                            scripts.push({
                                type: 'ref',
                                module: childNode.type,
                                content: childNode.getAttribute('src')
                            });
                        } else {
                            scripts.push({
                                type: 'inner',
                                module: childNode.type,
                                content: childNode.innerHTML
                            });
                        }
                        break;
                    case 'LINK':
                        links.push({
                            rel: childNode.rel,
                            href: childNode.getAttribute('href')
                        })
                        break;
                }
            }
            for (let childNode of document.head.childNodes) {
                if (childNode.nodeType !== 1) continue;
                outer: switch (childNode.nodeName) {
                    case 'TITLE':
                        childNode.textContent = newTitle;
                        break;
                    case 'STYLE':
                        for (let i = 0; i < styles.length; i++) {
                            if (childNode.innerHTML == styles[i]) {
                                styles.splice(i, 1);
                                break outer;
                            }
                        }
                        unusedNodes.push(childNode);
                        break;
                    case 'LINK':
                        for (let i = 0; i < links.length; i++) {
                            if (childNode.rel == links[i].rel && childNode.href == links[i].href) {
                                styles.splice(i, 1);
                                break outer;
                            }
                        }
                        unusedNodes.push(childNode);
                        break;
                    case 'SCRIPT':
                        if (!childNode.src) {
                            for (let i = 0; i < scripts.length; i++) {
                                if (scripts[i].type !== 'inner') continue;
                                if (childNode.type == scripts[i].module && childNode.innerHTML == scripts[i].content) {
                                    scripts.splice(i, 1);
                                    break outer;
                                }
                            }
                        } else {
                            for (let i = 0; i < scripts.length; i++) {
                                if (scripts[i].type !== 'ref') continue;
                                if (childNode.type == scripts[i].module && childNode.getAttribute('src') == scripts[i].content) {
                                    scripts.splice(i, 1);
                                    break outer;
                                }
                            }
                        }
                        unusedNodes.push(childNode);
                        break;
                    case 'META':
                        if (!childNode.name || !childNode.content) break;
                        for (let i = 0; i < metas.length; i++) {
                            if (childNode.name == metas[i].name && childNode.content == metas[i].content) {
                                metas.splice(i, 1);
                                break outer;
                            }
                        }
                        unusedNodes.push(childNode);
                        break;
                }
            }
            metas.forEach(v => {
                let el = document.createElement('meta');
                el.name = v.name;
                el.content = v.content;
                document.head.appendChild(el);
            });
            links.forEach(v => {
                let el = document.createElement('link');
                el.rel = v.rel;
                el.href = v.href;
                document.head.appendChild(el);
            });
            styles.forEach(v => {
                let el = document.createElement('style');
                el.innerHTML = v;
                document.head.appendChild(el);
            });
            scripts.forEach(v => {
                let el = document.createElement('script');
                if (v.type == 'ref') {
                    el.type = v.module;
                    el.src = v.content;
                } else {
                    el.type = v.module;
                    el.innerHTML = v.content;
                }
                document.head.appendChild(el);
            });
            unusedNodes.forEach(el => el.remove());
            // process body
            document.body.classList.add('not-ready');
            document.body.innerHTML = newDocument.body.innerHTML;
            document.body.classList.remove('not-ready');
            // scroll pos
            DoOthers();
            setTimeout(()=>{
                window.scrollTo(0,0);
            },0);
        }
    };
})(window, void 0);

function DoOthers(){
    document.body.classList.remove('main-anim-finished');
    // TOC
    if(window.___KContentTable){
        ___KContentTable();
    }
    // NavigationBar
    const NAV_ROOT = document.querySelector('.Neo.NavigationBar');
    const NAV_BAR_TOGGLE = NAV_ROOT.querySelector('.toggle');
    const NAV_BAR_CON = NAV_ROOT.querySelector('.kCon');
    const NAVIGATION_LOGO_WIDTH = NAV_ROOT.querySelector('.kLogo').clientWidth;
    const NAVIGATION_WIDTH = NAV_BAR_CON.clientWidth;
    let expandedHeight = NAV_BAR_CON.childElementCount * 48 + 'px';
    NAV_BAR_CON.style.setProperty('--expanded-height', expandedHeight);
    const NavBarIntelliJudge = () => {
        if (document.documentElement.clientWidth < NAVIGATION_WIDTH + NAVIGATION_LOGO_WIDTH + window.SINGLE_REM*4) {
            NAV_ROOT.classList.add('collapsed', 'short');
            NAV_ROOT.classList.remove('enough');
        } else {
            NAV_ROOT.classList.remove('collapsed', 'short');
            NAV_ROOT.classList.add('enough');
        }
    }
    window.addEventListener('resize', NavBarIntelliJudge);
    NAV_BAR_TOGGLE.addEventListener('click', () => {
        NAV_ROOT.classList.toggle('collapsed');
    });
    NavBarIntelliJudge();
    let lastKnownScrollPosition = 0;
    let ticking = false;

    function NavFloatToggle(scrollPos) {
        if(scrollPos >= 240 && scrollPos > lastKnownScrollPosition) {
            NAV_ROOT.classList.add('float');
        } else {
            NAV_ROOT.classList.remove('float');
        }
    }
    document.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if(window.scrollY != lastKnownScrollPosition) {
                    NavFloatToggle(window.scrollY);
                    lastKnownScrollPosition = window.scrollY;
                }
                ticking = false;
            });
            ticking = true;
        }
    });
    // Smooth Navigate
    document.querySelectorAll('a.smooth-navigated').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            Reload.goTo(el.href);
        })
        el.classList.remove('smooth-navigated');
    })
    // highlight
    if(window.hljs){
        hljs.highlightAll();
    }
    document.body.classList.add('main-anim');
    setTimeout(()=>{
        document.body.classList.remove('main-anim');
        document.body.classList.add('main-anim-finished');
    },500);
    // search
    const Q=(v,s)=>v.querySelector(s);
    function Search() {
        let q = document.querySelector('.Neo.SearchComp'), 
            p = document.querySelector('.Neo.SearchComp_Panel'), 
            dataTable,
            c = p.querySelector('.--P'), 
            inputNode = p.querySelector('.--I'); 
        p.querySelector('.--C').onclick = () => p.open = false; 
        let queryResult = async () => { 
            let r = new Map; 
            c.innerHTML = ''; 
            let iv = inputNode.value; 
            if (!iv) return;
            iv = iv.toLowerCase();
            if(!dataTable){
                let fetched = await((await fetch(q.querySelector('.URL').innerHTML)).text());
                dataTable = JSON.parse(fetched);
                dataTable.forEach(v=> v.content = v.content.toString().toLowerCase())
            }
            dataTable.forEach(v => {
                if(v.content.includes(iv)){
                    r.set(v.atitle,v.href);
                }
            });
            for (let [k, v] of r) 
                c.innerHTML += `<a href="${v}">${k}</a><hr>`; 
        };
        p.querySelector('.--S').onclick = queryResult;
        let ticking = false;
        inputNode.addEventListener('keyup',async ()=>{
            if(ticking) return;
            ticking = true;
            await queryResult();
            ticking = false;
        });
        p.open = false; 
        Q(q, '.openPanel').onclick = () => p.open = true
    }
    Search();
}
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(()=>{
        window.scrollTo(0,0);
    },0);
    DoOthers();
    const NAV_ROOT = document.querySelector('.Neo.NavigationBar');
    NAV_ROOT.classList.add('anim');
    setTimeout(()=>{
        NAV_ROOT.classList.remove('anim')
    },500);
})