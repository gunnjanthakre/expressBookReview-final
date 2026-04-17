const axios = require("axios");

const BASE_URL = "http://localhost:5000/books";

// ─── Task 10 – Async/Await (Get all books)
async function getAllBooks() {
  const res = await axios.get(`${BASE_URL}`);
  console.log(res.data);
}

// ─── Task 11 – Promise (ISBN)
function getBookByISBN(isbn) {
  return axios.get(`${BASE_URL}/isbn/${isbn}`)
    .then(res => console.log(res.data))
    .catch(err => console.log(err.message));
}

// ─── Task 12 – Author
async function getByAuthor(author) {
  const res = await axios.get(`${BASE_URL}/author/${author}`);
  console.log(res.data);
}

// ─── Task 13 – Title
async function getByTitle(title) {
  const res = await axios.get(`${BASE_URL}/title/${title}`);
  console.log(res.data);
}

module.exports = {
  getAllBooks,
  getBookByISBN,
  getByAuthor,
  getByTitle
};