'use strict';


 let books = document.querySelectorAll('.book'),
 booksParent = document.querySelector('.books');
 document.querySelector('.adv').remove();
// pick = document.querySelector('body'),
// h = document.querySelectorAll('h2'),
// newElem = document.createElement('li'),
 let title = books[0].getElementsByTagName('li');
 let title1 = books[5].getElementsByTagName('li');

booksParent.insertBefore(books[1],books[0]);
booksParent.append(books[2]);
booksParent.insertBefore(books[4],books[3]);
// console.log(adver);
// console.log(pick);

// console.log(document.children);
console.log(books);
document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
books[4].getElementsByTagName('a')[0].textContent = 'Книга 3. this и Прототипы Объектов';

// console.log(elem);

// console.log(h);
// console.log(book);

// newElem.textContent = 'Глава 8: За пределами ES6” и поставить её в правильное место';
// elem[2].appendChild(newElem);
console.log(title);
//books[0].insertBefore(book[2], book[9]); 
//books[0].insertBefore(book[9],null);
books[0].getElementsByTagName('ul')[0].insertBefore(title[2], title[10]);
 books[0].getElementsByTagName('ul')[0].insertBefore(title[5], title[7]);
 books[0].getElementsByTagName('ul')[0].insertBefore(title[7], title[3]);
 books[0].getElementsByTagName('ul')[0].insertBefore(title[2], title[10]);
 books[0].getElementsByTagName('ul')[0].insertBefore(title[9], title[6]);
 books[0].getElementsByTagName('ul')[0].insertBefore(title[7], title[2]);
 books[0].getElementsByTagName('ul')[0].insertBefore(title[7], title[2]);
 console.log(title1);

 books[5].getElementsByTagName('ul')[0].insertBefore(title1[9], title1[3]);
 books[5].getElementsByTagName('ul')[0].insertBefore(title1[2], title1[7]);
 books[5].getElementsByTagName('ul')[0].insertBefore(title1[5], title1[9]);