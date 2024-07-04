let _M_ = false;['Android','iPhone','Mobi','webOS','iPod','BlackBerry'].forEach(v=>navigator.userAgent.includes(v)&&(_M_=true));
const Q=(v,s)=>v.querySelector(s),D=document;const debug=()=>D.body.setAttribute('debug',0);const mobile=()=>{_M_=!_M_;D.documentElement.setAttribute('isMobile',_M_);}
D.documentElement.setAttribute('isMobile',_M_);
const { documentElement: root } = document;
if(navigator.userAgent.includes('Android')) root.classList.add('Android');