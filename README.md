# Roamly Tours Website

A portfolio project built with **Node.js, Express.js, Pug, MongoDB/Mongoose, and JWT authentication**. It includes a responsive tours catalogue, individual tour pages, sign-up/login, password hashing, a JWT stored in an HTTP-only cookie, and a protected account page.

> This is a learning/demo project. Tour information, prices, ratings, and images are sample content; there is no real booking or payment system.

## Features

- Responsive home page and tour catalogue
- Tour detail pages
- Pug server-side rendering
- MongoDB models for users and tours
- Sign-up and login with bcrypt password hashing
- JWT authentication in an HTTP-only cookie
- Protected `/account` page and logout
- Input validation and user-facing error messages
- Sample tours displayed even before the database is seeded

## Requirements

- Node.js 18 or later
- MongoDB running locally **or** a MongoDB Atlas connection string
- npm

## Setup on Windows PowerShell

1. Extract the ZIP and open the `tours-website` folder in VS Code.
2. Install dependencies:

   ```powershell
   npm install
   ```

3. Create your environment file:

   ```powershell
   Copy-Item .env.example .env
   ```

4. Open `.env` and set `MONGODB_URI` and `JWT_SECRET`.

   For local MongoDB, the default URI is:

   ```text
   MONGODB_URI=mongodb://127.0.0.1:27017/tours_website
   ```

   If you use MongoDB Atlas, replace it with your Atlas connection string. In Atlas, create a database user and allow your current IP in Network Access. Keep `.env` private and never commit it to GitHub.

5. Start the application:

   ```powershell
   npm run dev
   ```

6. Open `http://localhost:3000` (or the port printed in the terminal).

## Add sample tours to MongoDB (optional)

The app shows built-in sample cards if the `tours` collection is empty. To store them in MongoDB, stop the server and run:

```powershell
node seed.js
```

Then restart `npm run dev`.

## Routes

| Method | Route | Purpose |
|---|---|---|
| GET | `/` | Home page |
| GET | `/tours` | Browse tours |
| GET | `/tours/:slug` | Tour details |
| GET | `/auth/signup` | Sign-up form |
| POST | `/auth/signup` | Create user |
| GET | `/auth/login` | Login form |
| POST | `/auth/login` | Authenticate user |
| POST | `/auth/logout` | Clear auth cookie |
| GET | `/account` | Protected account page |

## Interview explanation

“I developed a tours website using Node.js, Express.js, Pug, and MongoDB. Express handles routing and server-side logic, Pug renders dynamic HTML pages, and MongoDB stores application data. I implemented registration and login with JWT-based authentication and bcrypt password hashing. This project helped me understand server-side rendering, REST-style routing, database integration, and protected routes.”

## Before production

Add CSRF protection for form posts, rate limiting for authentication routes, stronger input validation, email verification/password reset, automated tests, logging, and a production secret-management setup. For larger deployments, review cookie/session policy and token revocation strategy. The current implementation is intended for learning and portfolio demonstration.
