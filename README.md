# Food App (React 19 + Vite)

A modern food ordering web app built with **React 19** and **Vite**. It features a responsive UI, browsable menu, category filters, a client-side cart, and clean component architecture. The project is designed to be fast, developer-friendly, and scalable into a full MVP with authentication, payments, and orders.

---

##  Features

-  **React 19 + Vite** for blazing-fast development
-  **Menu browsing** with categories & search
-  **Cart with quantity controls** and total price calculation
-  **Responsive design** for desktop and mobile
-  **Reusable components** and modular file structure
-  **Optional backend integration** (Node/Express ready)

---

##  Project Structure

Food-App-React-19/
├── backend/ # Optional Node/Express API
│ ├── src/
│ ├── package.json
│ └── .env.example
├── public/ # Static assets (images, icons)
├── src/ # React app
│ ├── components/ # UI components
│ ├── pages/ # Pages (Home, Cart, etc.)
│ ├── hooks/ # Custom hooks
│ ├── lib/ # Helpers & API client
│ ├── App.jsx
│ └── main.jsx
├── package.json
├── vite.config.js
└── .gitignore


---

##  Getting Started

### Prerequisites
- Node.js **18+**
- npm, pnpm, or yarn

### 1. Clone
```bash
git clone https://github.com/Envyiwnl/Food-App-React-19.git
cd Food-App-React-19

2. Install frontend dependencies

npm install

3. Setup environment

Create a .env file in root:

VITE_API_BASE_URL=http://localhost:4000/api

(Optional if not using backend)
4. Run frontend

npm run dev

Visit http://localhost:5173

.
 Optional Backend

If you want to run the API:

cd backend
npm install

Create backend/.env:

PORT=4000
CORS_ORIGIN=http://localhost:5173

Start server:

npm run dev

 Scripts (Frontend)

    npm run dev → Start dev server

    npm run build → Production build

    npm run preview → Preview build

 Tech Stack

Frontend: React 19, Vite, Axios/Fetch, Tailwind CSS (if enabled)
Backend (optional): Node.js, Express, CORS, MongoDB (future support)
 Deployment
Frontend

    Deploy on Vercel or Netlify.

    Build command: npm run build

    Output: dist

Backend

    Deploy on Render, Railway, or Fly.io.

    Ensure CORS_ORIGIN matches your deployed frontend URL.

 Roadmap

Persistent cart (localStorage)

User authentication

Checkout & orders

Admin dashboard

    Image optimization

 Author

Parvez Mussarf

    GitHub: @Envyiwnl
