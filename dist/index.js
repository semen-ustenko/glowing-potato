let count = 0;
const button = document.querySelector('button');
const h = document.querySelector('h1');

button.addEventListener('click', () => { 
    h.textContent = `Count: ${count++}`;
});
