document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('ms-placeholder#navigator').innerHTML = 
    `<header><a href="/">主页</a><a href="/demos/">Demos</a></header>`;
    document.querySelector('ms-placeholder#footer').innerHTML = 
    `<footer>2024 Soloev & 2024 0xarch, All rights reserved.</footer>`;
    document.head.innerHTML += 
    `<style>
        body {
            color: #fff;
            background: #222;
            margin: 0;
        }
        @media(prefers-color-scheme:light){
            body {
                color: #000;
                background: #eee;
            }
        }
        ms-placeholder {
            display: block;
        }
        ms-placeholder#navigator {
            margin-bottom: 2em;
        }
        ms-placeholder#navigator a {
            display: inline-block;
            height: 1.25em;
            margin: .75em;
        }
        ms-placeholder#footer {
            color: #fff;
            background: #000;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>`;
});