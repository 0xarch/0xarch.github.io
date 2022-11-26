function resize(){
    if(screen.width<screen.height){
        container.style.flexDirection="column-reverse";
        container.style.alignItems="center";
    }else{
        container.style.flexDirection="row";
        container.style.alignItems="flex-start";
    }
}