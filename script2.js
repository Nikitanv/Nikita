'use strict';


let elem = document.querySelectorAll('.book'),
col = document.querySelectorAll('.books'),
adver = document.querySelectorAll('adv'),
pick = document.querySelector('body'),
dav = document.querySelectorAll('div'),
h = document.querySelectorAll('h2'),
l = document.querySelectorAll('li'),
newElem = document.createElement('li');

console.log(adver);
console.log(pick);
col[0].insertBefore(elem[1],elem[0]);
col[0].insertBefore(elem[2],null);
col[0].insertBefore(elem[4],elem[3]);

console.log(document.children);

pick.setAttribute('style', 'background-image:url(./image/you-dont-know-js.jpg)');


console.log(elem);
console.log(dav);
console.log(h);
console.log(l);

h[4].outerHTML =  "<h2>            <a href='https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes'target='_blank'>Книга 3. this и Прототипы Объектов</a></h2>";


dav[6].remove('adv');
newElem.textContent = 'Глава 8: За пределами ES6” и поставить её в правильное место';
elem[2].appendChild(newElem);
