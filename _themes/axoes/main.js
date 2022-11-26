
function resize(){
    console.log(1);
    if(screen.width<screen.height){
        container.style.flexDirection="column-reverse";
        container.style.alignItems="center";
        document.querySelector("header").style.fontSize="2rem";
        document.querySelector("#column-left").style.fontSize="1.75rem";
        document.querySelector("#column-right").style.fontSize="1.75rem";
        document.querySelectorAll("#column-left>*").forEach((el)=>{el.style.width="85vw"});
    }else{
        container.style.flexDirection="row";
        container.style.alignItems="flex-start";
    }
}
window.onload=()=>{resize();}