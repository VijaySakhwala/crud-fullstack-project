# CRUD Full‑stack Project

A full‑stack application that implements Create, Read, Update and Delete (CRUD) functionality using a client (front‑end) and server (back‑end) architecture.

---

## 🧰 Project Structure

```
/ (project root)
├── client/
│   ├── node_modules/
│   ├── build/               # production build of front‑end
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── package-lock.json
├── server/
│   ├── node_modules/
│   ├── build/               # production build (if compiled) or compiled output
│   ├── src/
│   ├── package.json
│   └── package-lock.json
├── .gitignore
└── README.md
```

---

## 🧭 Technologies Used

**Front‑end (Client):**
- React
- JavaScript
- CSS

**Back‑end (Server):**
- Node.js with Express
- Database - MongoDB
- Build & run scripts

---

## 🚀 Getting Started

### Prerequisites
- Node.js
- npm
- Database setup  - MongoDB running locally or connection string for cloud DB

### Setup & Run

#### 1. Clone the repository
```bash
git clone https://github.com/VijaySakhwala/crud-fullstack-project.git
cd crud-fullstack-project
```

#### 2. Setup the server
```bash
cd server
npm install
# optionally create a `.env` file with your environment variables (e.g. DB connection)
npm run dev        # for development
# npm run build    # for production build 
# npm start        # start server in production mode 
```

#### 3. Setup the client
```bash
cd ../client
npm install
npm start          # runs the front‑end in development mode
# npm run build    # to create production build
```

#### 4. Access the application
- Front‑end: `http://localhost:3000`
- Back‑end API: `http://localhost:5000/api`

---

## 🧪 Features

- Create new resource (e.g., “User”)
- Read / list existing resources
- Update resource fields
- Delete resources
- Error handling for invalid operations
- Authentication
- Responsive UI
