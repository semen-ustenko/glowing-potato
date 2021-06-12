let count = 0;
const button = document.querySelector('button');
const h = document.querySelector('h1');

button.addEventListener('click', () => {
    if (count % 5 === 0 && count !== 0) {
        alert('Да ты заебал!')
    }
    h.textContent = `Count: ${count++}`;
});
