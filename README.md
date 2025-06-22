# 🌍 EchoTalk – Fullstack Language Exchange Platform

A full-featured real-time chat and video calling platform that connects users from different countries to practice languages, share screens, make friends, and communicate through text, emoji reactions, and video.


---

## 🚀 Features

- 🔐 JWT Authentication with Protected Routes
- 🧭 Onboarding Flow for User Setup
- 💬 Real-Time Chat with Typing Indicators & Emoji Reactions
- 📹 1-on-1 & Group Video Calls with Screen Sharing & Recording
- 👥 Friend System: Add/Remove Friends, Chat Privately or in Groups
- 🎨 32 Unique UI Themes for Customization
- 🌍 Designed for Global Language Exchange & Collaboration
- 🧠 State Management with Zustand
- 🚨 Full Error Handling (Frontend + Backend)
- ⚙️ Built on Scalable Tools like Stream API
- 🌈 Modern UI with Tailwind CSS
- 🌐 Free Deployment (Vercel / Render)

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS, TanStack Query, Zustand
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT (JSON Web Token)
- **Real-Time:** Stream API + WebSockets

---

## 🧪 Environment Setup

Create `.env` files in both frontend and backend folders:

PORT=YOUR_PORT
MONGO_URI=your_mongo_uri
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
JWT_SECRET_KEY=your_jwt_secret
NODE_ENV=development

Frontend (/frontend)
VITE_STREAM_API_KEY=your_stream_api_key


🔧 Run the Backend
cd backend
npm install
npm run dev


💻 Run the Frontend
cd frontend
npm install
npm run dev
