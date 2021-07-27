const BASE_URL = 'http://localhost:5555';

function fetchBooks() {
  return fetch(`${BASE_URL}/books`).then(response => response.json());
}

function fetchBookById(bookId) {
  return fetch(`${BASE_URL}/books/${bookId}`).then(response => response.json());
}

fetchBooks();

fetchBookById(2);

fetchBookById(4);
// const BASE_URL = 'http://localhost:4040';

// function fetchBooks() {
//   return fetch(`${BASE_URL}/books`).then(res => res.json());
// }

// function fetchBookById(bookId) {
//   return fetch(`${BASE_URL}/books/${bookId}`).then(res => res.json());
// }

// fetchBooks();
// fetchBookById(2);
// fetchBookById(4);
