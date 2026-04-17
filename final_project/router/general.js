const express = require("express");
const public_users = express.Router();
const books = require("../booksdb.js");

// ─── Task 1 – Get all books ─────────────────────────────
public_users.get("/", (req, res) => {
  return res.status(200).json(books);
});

// ─── Task 2 – Get by ISBN ────────────────────────────────
public_users.get("/isbn/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  const book = books[isbn];

  if (book) {
    return res.status(200).json(book);
  }
  return res.status(404).json({ message: "Book not found" });
});

// ─── Task 3 – Get by Author ──────────────────────────────
public_users.get("/author/:author", (req, res) => {
  const author = req.params.author;

  const result = Object.values(books).filter(
    (b) => b.author.toLowerCase() === author.toLowerCase()
  );

  return res.status(200).json(result);
});

// ─── Task 4 – Get by Title ───────────────────────────────
public_users.get("/title/:title", (req, res) => {
  const title = req.params.title;

  const result = Object.values(books).filter(
    (b) => b.title.toLowerCase() === title.toLowerCase()
  );

  return res.status(200).json(result);
});

// ─── Task 5 – Get Reviews ────────────────────────────────
public_users.get("/review/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  const book = books[isbn];

  if (book) {
    return res.status(200).json(book.reviews);
  }
  return res.status(404).json({ message: "Book not found" });
});

module.exports = public_users;