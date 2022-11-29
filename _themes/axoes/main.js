
function resize(){
    console.log(1);
    if(screen.width<screen.height){
        container.style.flexDirection="column-reverse";
        container.style.alignItems="center";
        document.querySelector("header").style.fontSize="2rem";
        document.querySelector("#column-left").style.fontSize="2rem";
        document.querySelector("#column-right").style.fontSize="1.75rem";
        document.querySelector("#column-right").style.width="80vw";
        document.querySelector("#column-left").style.width="80vw";
        document.querySelector("#column-left>#data_toc").style.display="none";
        document.querySelector("#search-container").style.fontSize="1.3em";
        document.querySelector("#search-container>#search-container-top").style.margin="auto";
        document.querySelector("#search-container>#search-container-top>input").style.height="3em";
        document.querySelector("#search-container>#search-container-top>input").style.width="50%";
        document.querySelector("#search-container .fa-close").style.display="none";
    }
}
function render_scroll(id){
    document.querySelector(id).scrollIntoView(true);
}

// --- MODULE SEARCH ---
var searchIsClosed=false;
function toggleSearch(){
    document.querySelector("#search-container").style.opacity=searchIsClosed?"1":"0";
    document.querySelector("#search-container").style.zIndex=searchIsClosed?"10":"-1";
    searchIsClosed=searchIsClosed?false:true;
}
function search(){
    var text=document.querySelector("#in-menu-search-input").value.toLowerCase();
    var all_filter=document.querySelectorAll(".be-filted>a");
    all_filter.forEach((el)=>{
        if(el.innerHTML.toLowerCase().includes(text) || el.href.toLowerCase().includes(text))el.style.display="block";
        else el.style.display="none";
    });
}
function close_search(){
    searchIsClosed=false;
    toggleSearch();
}
function toggleHeader(arg){
    switch(arg){
        case true:
            document.querySelector("header").style.top="0";
            break;
        case false:
            document.querySelector("header").style.top="-3em";
    }
}
var scrollFunc = function (e) { 
e = e || window.event; 
if (e.wheelDelta) {
    if (e.wheelDelta > 0) { // KHTML & Trident
        toggleHeader(true);
    }
    if (e.wheelDelta < 0) {
        toggleHeader(false);
    }
} else if (e.detail) { // Gecko 
    if (e.detail< 0) {
        toggleHeader(true);
    }
    if (e.detail> 0) {
        toggleHeader(false);
    }
    } 
}
if (document.addEventListener) { // Gecko
document.addEventListener('DOMMouseScroll', scrollFunc, false); 
} 
window.onmousewheel = document.onmousewheel = scrollFunc; // KHTML & Trident

window.onload=()=>{resize();hljs.highlightAll();toggleSearch()}