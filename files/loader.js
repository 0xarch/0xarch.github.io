window.addEventListener('DOMContentLoaded',async()=>{
    let reqsvgs = document.querySelectorAll('*[\\$svg]');
    let cache = {};
    reqsvgs.forEach(async e=>{
        let path = e.getAttribute('$svg');
        if (!cache[path]) {
            let text = await(await fetch(path)).text();
            cache[path] = text;
        }
        e.innerHTML = cache[path];
    })
})