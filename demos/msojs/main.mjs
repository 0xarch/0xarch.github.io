document.addEventListener('DOMContentLoaded', async () => {
    document.querySelectorAll('ms-textarea').forEach(msTextarea => {
        let textarea = document.createElement('textarea');
        msTextarea.appendChild(textarea);
        msTextarea.value = () => textarea.value;
    })
})