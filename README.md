🌍 EchoTalk – Language Exchange Platform

A full-stack, real-time** platform connecting global users to practice languages, make friends, and collaborate through **text chat, video calls, and screen sharing. Built for seamless communication with a vibrant, customizable UI.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black.svg)](https://vercel.com)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://www.javascript.com)

---

 ✨ Features
 
- 🔐 Secure Authentication**: JWT-based login with protected routes for user safety.
- 🧭 Guided Onboarding**: Personalized setup for new users to define language preferences.
- 💬 Real-Time Chat**: Instant messaging with typing indicators, emoji reactions, and group chats.
- **📹 Video & Screen Sharing**: 1:1 or group video calls with recording and screen-sharing capabilities.
- **👥 Friend System**: Add/remove friends, manage private or group conversations.
- **🎨 32 Unique Themes**: Customize your UI with vibrant, dynamic themes.
- **🌍 Global Collaboration**: Designed for language exchange and cultural connection.
- **🧠 Lightweight State Management**: Powered by Zustand for efficient performance.
- **🚨 Robust Error Handling**: Comprehensive error management on frontend and backend.
- **⚙️ Scalable APIs**: Integrated with Stream API for real-time features.
- **🌈 Modern Styling**: Sleek, responsive UI crafted with Tailwind CSS.
- **🌐 Free Deployment**: Hosted on Vercel (frontend) and Render (backend).

---

## 🛠 Tech Stack

| **Category**       | **Technologies**                          |
|--------------------|-------------------------------------------|
| **Frontend**       | React.js, Tailwind CSS, TanStack Query, Zustand |
| **Backend**        | Node.js, Express.js, MongoDB              |
| **Authentication** | JSON Web Tokens (JWT)                     |
| **Real-Time**      | Stream API, WebSockets                    |

---

## 🚀 Getting Started

Follow these steps to set up and run EchoTalk locally.

### Prerequisites
- Node.js (v16 or higher)
- MongoDB account (for MongoDB Atlas)
- Stream account (for API key/secret)

### Environment Setup
1. Clone the repository:
   ```
   git clone https://github.com/Vipinmaury/EchoTalk.git
   cd EchoTalk
   ```

2. Create `.env` files in both `frontend` and `backend` folders with the following variables:

   **Backend (`backend/.env`)**:
   ```
   PORT=5000
   MONGO_URI=your_mongo_uri
   STREAM_API_KEY=your_stream_api_key
   STREAM_API_SECRET=your_stream_api_secret
   JWT_SECRET_KEY=your_jwt_secret
   NODE_ENV=development
   ```

   **Frontend (`frontend/.env`)**:
   ```
   VITE_STREAM_API_KEY=your_stream_api_key
   ```

### Installation & Running

#### Backend
```bash
cd backend
npm install
npm run dev
```

#### Frontend
```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173` (or your configured port) to view the app.

---

## 📂 Project Structure

```
EchoTalk/
├── backend/              # Node.js/Express backend
│   ├── routes/           # API routes
│   ├── controllers/      # Request handlers
│   ├── models/           # MongoDB schemas
│   └── .env              # Backend environment variables
├── frontend/             # React.js frontend
│   ├── src/              # Source files
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page components
│   │   └── hooks/        # Custom React hooks
│   └── .env              # Frontend environment variables
├── README.md             # Project documentation
└── LICENSE               # MIT License
```

---

## 🌟 Contributing

We welcome contributions to make EchoTalk even better! Here's how you can help:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

Please read our [Contributing Guidelines](CONTRIBUTING.md) for more details.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- [Stream API](https://getstream.io/) for real-time chat and video features.
- [Tailwind CSS](https://tailwindcss.com/) for stunning UI design.
- [Zustand](https://zustand-demo.pmnd.rs/) for lightweight state management.

---

## 📬 Contact

Have questions or ideas? Reach out to me!

- **Vipin Maurya**
- Email: [mauryavipin751@gmail.com](mailto:mauryavipin751@gmail.com)
- LinkedIn: [linkedin.com/in/vipin-maurya-54b28a215](https://www.linkedin.com/in/vipin-maurya-54b28a215)
- GitHub: [github.com/Vipinmaury](https://github.com/Vipinmaury)

---

🌍 **Join EchoTalk today and connect the world through language!**

--- 

### Why This is Modern?
- **Visual Appeal**: Shields.io badges, emojis, aur clean typography se GitHub pe standout look.
- **Structured**: Clear sections (Features, Tech Stack, Setup, etc.) with tables aur code blocks.
- **Contributor-Friendly**: Contributing section aur project structure developers ko invite karta hai.
- **Professional**: License, acknowledgements, aur contact info credibility dete hain.
- **Engaging**: Catchy tagline aur emojis se README boring nahi lagta.

