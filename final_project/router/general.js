const express = require("express");
const router = express.Router();
const books = require("../booksdb");

// ------------------- GET ALL BOOKS -------------------
router.get("/", (req, res) => {
  res.send(books);
});

// ------------------- GET BY ISBN -------------------
router.get("/isbn/:isbn", (req, res) => {
  const book = books[req.params.isbn];
  res.send(book ? book : { message: "Book not found" });
});

// ------------------- GET BY AUTHOR -------------------
router.get("/author/:author", (req, res) => {
  const result = Object.entries(books).filter(
    ([key, value]) => value.author === req.params.author
  );

  res.send(Object.fromEntries(result));
});

// ------------------- GET BY TITLE -------------------
router.get("/title/:title", (req, res) => {
  const result = Object.entries(books).filter(
    ([key, value]) => value.title === req.params.title
  );

  res.send(Object.fromEntries(result));
});

// ------------------- REGISTER -------------------
let users = require("./auth_users.js");

router.post("/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required." });
  }

  if (users.find((user) => user.username === username)) {
    return res.status(409).json({ message: "User already exists." });
  }

  users.push({ username, password });

  return res.status(201).json({
    message: `User '${username}' successfully registered. You can now log in.`,
  });
});

module.exports = { general: router };