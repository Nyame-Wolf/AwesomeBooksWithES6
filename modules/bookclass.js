const bookForm = document.querySelector('.book-form');

const bookContainer = document.querySelector('.book-container');

const books = JSON.parse(localStorage.getItem('books')) || [];

const uniqueIdGen = () => {
  let id = Date.now();
  // eslint-disable-next-line no-return-assign
  return () => id += 1;
};
const uniqueId = uniqueIdGen();

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    // eslint-disable-next-line no-undef
    this.id = uniqueId();
  }

    static addBook = (book) => {
      const x = {
        title: book.title,
        author: book.author,
        id: book.id,
      };
      books.push(x);
      localStorage.setItem('books', JSON.stringify(books));
      return x;
    };

    static createBook = ({
      title, author, id,
    }) => {
      const bookDiv = document.createElement('div');
      bookDiv.setAttribute('data-id', id);
      bookDiv.classList.add('book');
      const paragraphDiv = document.createElement('div');
      const bookTitle = document.createElement('p');
      const bookAuthor = document.createElement('p');
      paragraphDiv.append(bookTitle, bookAuthor);
      paragraphDiv.classList.add('para');
      const AremoveBtn = document.createElement('button');
      AremoveBtn.classList.add('remove');

      bookTitle.innerText = `"${title}" by`;
      bookAuthor.innerText = ` ${author}`;
      AremoveBtn.innerText = 'Remove';

      bookDiv.append(paragraphDiv, AremoveBtn);
      bookContainer.appendChild(bookDiv);

      AremoveBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const index = books.findIndex((book) => book.id === id);
        books.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(books));
        localStorage.removeItem('bookDiv');
        bookDiv.remove();
      });
    };
}

export {
  Book, books, bookForm, bookContainer, uniqueIdGen, uniqueId,
};