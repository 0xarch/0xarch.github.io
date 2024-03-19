let _M_ = false;['Android','iPhone','Mobi','webOS','iPod','BlackBerry'].forEach(v=>navigator.userAgent.includes(v)&&(_M_=true));
const Q=(v,s)=>v.querySelector(s),D=document;const debug=()=>D.body.setAttribute('debug',0);const mobile=()=>{_M_=!_M_;D.documentElement.setAttribute('isMobile',_M_);}
D.documentElement.setAttribute('isMobile',_M_);

function Search(){let q=Q(D,'.com.search'),p=Q(D,'#searchPanel'),t;let c=Q(p,'.--P'),i=Q(p,'.--I');Q(p,'.--C').onclick=()=>p.open=!1;Q(p,'.--S').onclick=async()=>{let r=new Map;c.innerHTML='';let iv=i.value;if(!iv)return;!t&&(t=JSON.parse(await(await fetch(Q(D,'#searchUrl').innerHTML)).text()));t.forEach(v=>v.content.toString().includes(iv)&&r.set(v.atitle,v.href));for(let[k,v]of r)c.innerHTML+=`<a href="${v}" class='Row'>${k}</a><hr>`;};p.open=!1;Q(q,'.openPanel').onclick=()=>p.open=!0}
document.addEventListener('DOMContentLoaded',()=>{try{Search()}catch(e){console.error(e)}})