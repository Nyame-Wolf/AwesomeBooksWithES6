import * as bkClass from './modules/bookclass.js';
import * as variables from './modules/navVariables.js';
import time from './modules/localDate.js';

bkClass.books.forEach(bkClass.Book.createBook);
bkClass.bookForm.onsubmit = (e) => {
  e.preventDefault();
  // eslint-disable-next-line max-len
  const newBook = bkClass.Book.addBook(new bkClass.Book(bkClass.bookForm.title.value, bkClass.bookForm.author.value));
  bkClass.Book.createBook(newBook);
};

variables.listLink.addEventListener('click', () => {
  variables.addNewAuthor.style.display = 'none';
  variables.contact.style.display = 'none';
  variables.list.style.display = 'block';
});

variables.addNewAuthorLink.addEventListener('click', () => {
  variables.list.style.display = 'none';
  variables.contact.style.display = 'none';
  variables.addNewAuthor.style.display = 'block';
});

variables.contactLink.addEventListener('click', () => {
  variables.list.style.display = 'none';
  variables.addNewAuthor.style.display = 'none';
  variables.contact.style.display = 'flex';
});

// eslint-disable-next-line no-unused-vars ,no-multi-assign
const dateItem = document.querySelector('.date').innerHTML = time;