const BASE_URL = 'http://localhost:5555';

function removeBook(bookId) {
  const url = `${BASE_URL}/books/${bookId}`;
  const options = {
    method: 'DELETE',
  }

  return fetch(url, options)
    .then(response => response.json());
}
// function removeBook(bookId) {
//   const url = `${BASE_URL}/books/${bookId}`;
//   const options = {
//     method: 'DELETE',
//   };

//   return fetch(url, options).then(res => res.json());
// }

// removeBook(69);

