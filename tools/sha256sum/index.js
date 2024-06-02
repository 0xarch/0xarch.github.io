const hash = sha256.create();

document.addEventListener('DOMContentLoaded',()=>{
    const input = document.getElementById('Linput');
    const button = document.getElementById('Lsum');
    const out = document.getElementById('Lout');
    button.addEventListener('click',()=>{
        console.log('String to be converted: '+input.value);
        out.textContent = sha256(input.value);
    });
});