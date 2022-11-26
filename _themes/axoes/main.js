
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
    //document.querySelector("#search-container").style.display=searchIsClosed?"block":"none";
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

window.onload=()=>{resize();hljs.highlightAll();toggleSearch()}