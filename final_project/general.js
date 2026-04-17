const axios = require("axios");

const BASE_URL = "http://localhost:5000";

// Get all books
async function getAllBooks() {
  const response = await axios.get(`${BASE_URL}/`);
  return response.data;
}

// Get book by ISBN
async function getBookByISBN(isbn) {
  const response = await axios.get(`${BASE_URL}/isbn/${isbn}`);
  return response.data;
}

// Get books by Author
async function getBooksByAuthor(author) {
  const response = await axios.get(`${BASE_URL}/author/${author}`);
  return response.data;
}

// Get books by Title
async function getBooksByTitle(title) {
  const response = await axios.get(`${BASE_URL}/title/${title}`);
  return response.data;
}

module.exports = {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle
};