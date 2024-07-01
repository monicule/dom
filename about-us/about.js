const h1DOM = document.getElementById('title');
console.log(h1DOM);

const pDOM = document.getElementsByTagName('p');
console.log(pDOM[0].innerText);
console.log(pDOM[0].textContent);

console.log(h1DOM.innerText.toUpperCase());
// console.log(pDOM.innerText);

console.clear();

const ulDOM = document.getElementsByTagName('ul');
console.log(ulDOM);

const liDOM = ulDOM[1].getElementsByTagName('li');

for (let i = 0; i < liDOM.length; i++) {
    console.log(liDOM[i].innerText);
}


// elementas.innerText = '145621';