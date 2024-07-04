const D=document,Q=(v,s)=>v.querySelector(s);
function Search() {
    let q = Q(D, '.Neo.SearchComp'), 
        p = Q(D, '.Neo.SearchComp.Panel'), 
        t,
        c = Q(p, '.--P'), 
        i = Q(p, '.--I'); 
    let searchCompRoot = document.querySelector('.Neo.SearchComp');
    let searchPanel = document.querySelector('.Neo.Hotload.Search.Panel');
    Q(p, '.--C').onclick = () => p.open = false; 
    Q(p, '.--S').onclick = async () => { 
        let r = new Map; 
        c.innerHTML = ''; 
        let iv = i.value; 
        if (!iv) return; 
        if(!t){
            let fetched = await((await fetch(Q(q,'.URL').innerHTML)).text());
            t = fetched;
        }
        t.forEach(v => {
            if(v.content.toString().includes(iv)){
                r.set(v.atitle,v.href);
            }
        });
        for (let [k, v] of r) 
            c.innerHTML += `<a href="${v}" class='Row'>${k}</a><hr>`; 
    }; 
    p.open = false; 
    Q(q, '.openPanel').onclick = () => p.open = true
}
document.addEventListener('DOMContentLoaded', () => { try { Search() } catch (e) { console.error(e) } })