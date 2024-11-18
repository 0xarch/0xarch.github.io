// const D=document,Q=(v,s)=>v.querySelector(s);
// function Search() {
//     let q = document.querySelector('.Neo.SearchComp'), 
//         p = document.querySelector('.Neo.SearchComp_Panel'), 
//         dataTable,
//         c = p.querySelector('.--P'), 
//         inputNode = p.querySelector('.--I'); 
//     p.querySelector('.--C').onclick = () => p.open = false; 
//     let queryResult = async () => { 
//         let r = new Map; 
//         c.innerHTML = ''; 
//         let iv = inputNode.value; 
//         if (!iv) return;
//         iv = iv.toLowerCase();
//         if(!dataTable){
//             let fetched = await((await fetch(q.querySelector('.URL').innerHTML)).text());
//             dataTable = JSON.parse(fetched);
//             dataTable.forEach(v=> v.content = v.content.toString().toLowerCase())
//         }
//         dataTable.forEach(v => {
//             if(v.content.includes(iv)){
//                 r.set(v.atitle,v.href);
//             }
//         });
//         for (let [k, v] of r) 
//             c.innerHTML += `<a href="${v}">${k}</a><hr>`; 
//     };
//     p.querySelector('.--S').onclick = queryResult;
//     let ticking = false;
//     inputNode.addEventListener('keyup',async ()=>{
//         if(ticking) return;
//         ticking = true;
//         await queryResult();
//         ticking = false;
//     });
//     p.open = false; 
//     Q(q, '.openPanel').onclick = () => p.open = true
// }
// document.addEventListener('DOMContentLoaded', () => { try { Search() } catch (e) { console.error(e) } })