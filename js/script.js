const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.querySelector('input');

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : ['Toyota', 'Honda', 'Mazda'];

localStorage.setItem('items', JSON.stringify(itemsArray));
const storageData = JSON.parse(localStorage.getItem('items'));

function textCreate(text) {
    const paragraph = document.createElement('li');
    paragraph.textContent = text;

    ul.appendChild(paragraph);
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    itemsArray.push(input.value);

    localStorage.setItem('items', JSON.stringify(itemsArray));
    textCreate(input.value);
    input.value = '';
});

storageData.forEach(function(item) {
    textCreate(item);
});

button.addEventListener('click', function() {
    localStorage.clear();
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
})