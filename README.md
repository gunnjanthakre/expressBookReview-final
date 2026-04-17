# Express Book Review – IBM Final Project

## Setup

```bash
git clone <your-forked-repo-url>
cd expressBookReview
npm install
node index.js
```

Server starts on **http://localhost:5000**

---

## cURL Commands (save outputs as specified for grading)

### Task 1 – Get all books → save as `getallbooks`
```bash
curl -s http://localhost:5000/ | json_pp
```

### Task 2 – Get book by ISBN → save as `getbooksbyISBN`
```bash
curl -s http://localhost:5000/isbn/1 | json_pp
```

### Task 3 – Get books by author → save as `getbooksbyauthor`
```bash
curl -s http://localhost:5000/author/Homer | json_pp
```

### Task 4 – Get books by title → save as `getbooksbytitle`
```bash
curl -s http://localhost:5000/title/Odyssey | json_pp
```

### Task 5 – Get book reviews → save as `getbookreview`
```bash
curl -s http://localhost:5000/review/1 | json_pp
```

### Task 6 – Register new user → save as `register`
```bash
curl -s -X POST http://localhost:5000/register \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"test1234"}' | json_pp
```

### Task 7 – Login → save as `login`
```bash
curl -s -X POST http://localhost:5000/customer/login \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"test1234"}' \
  -c cookies.txt | json_pp
```

### Task 8 – Add/modify review → save as `reviewadded`
```bash
curl -s -X PUT "http://localhost:5000/customer/auth/review/1?review=GreatBook" \
  -H "Content-Type: application/json" \
  -b cookies.txt | json_pp
```

### Task 9 – Delete review → save as `deletereview`
```bash
curl -s -X DELETE http://localhost:5000/customer/auth/review/1 \
  -b cookies.txt | json_pp
```

### Task 10 – Run async/promise Node.js file
```bash
node general.js
```

---

## Project Structure

```
expressBookReview/
├── index.js                   # Express app entry point
├── general.js                 # Task 10 – Async/Await & Promises with Axios
├── package.json
└── router/
    ├── booksdb.js             # Book data store
    ├── auth_users.js          # In-memory users store
    ├── general.js             # Public routes (Tasks 1-6)
    └── auth_users_routes.js   # Authenticated routes (Tasks 7-9)
```

## Notes
- JWT tokens are stored in `express-session` so cookie-based `curl -c / -b` works.
- Each user can only modify or delete **their own** reviews.
<<<<<<< Updated upstream
- `general.js` (root level) uses Async/Await for Task 1 and Promises for Tasks 2–4.
=======
- `general.js` (root level) uses Async/Await for Task 1 and Promises for Tasks 2–4.
>>>>>>> Stashed changes
