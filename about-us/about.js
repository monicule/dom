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

const liDOM = ulDOM[0].getElementsByTagName('li');

for (let i = 0; i < liDOM.length; i++) {
    console.log(liDOM[i].innerText);
}


// elementas.innerText = '145621';

for (let i = 0; i < liDOM.length; i++) {
    console.log(liDOM[i].innerText + ' 111');
}

for (let i = 0; i < liDOM.length; i++) {
    for (let y = 1; y < liDOM.length + 1; y++) {
        console.log( y + ') ' + liDOM[i++].innerText);
}

}

console.log(h1DOM.innerText.toString());


