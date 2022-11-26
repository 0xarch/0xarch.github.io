
function resize(){
    console.log(1);
    if(screen.width<screen.height){
        container.style.flexDirection="column-reverse";
        container.style.alignItems="center";
        document.querySelector("header").style.fontSize="2rem";
        document.querySelector("#column-left").style.fontSize="1.75rem";
        document.querySelector("#column-right").style.fontSize="1.75rem";
        document.querySelector("#column-right").style.width="85vw";
        document.querySelector("#column-left").style.width="85vw";
        document.querySelector("#search-container").style.fontSize="1.3em";
    }
}
function render_scroll(id){
    document.querySelector(id).scrollIntoView(true);
}

// --- MODULE SEARCH ---
var searchIsClosed=false;
function toggleSearch(){
    document.querySelector("#search-container").style.display=searchIsClosed?"block":"none";
    searchIsClosed=searchIsClosed?false:true;
}
function search(){
    var text=document.querySelector("#in-menu-search-input").value;
    var all_filter=document.querySelectorAll(".be-filted>a");
    all_filter.forEach((el)=>{
        if(el.innerHTML.includes(text) || el.href.includes(text))el.style.display="block";
        else el.style.display="none";
    });
}

window.onload=()=>{resize();hljs.highlightAll();toggleSearch()}