# 🚀 DeepSeek Clone

**DeepSeek Clone** is a modern web application that provides an **AI-powered chat interface** — allowing users to engage in dynamic conversations, manage chat sessions, and personalize their experience with features like renaming or deleting chats.  

Built with **Next.js**, **React**, and **Node.js**, it delivers real-time interactivity, secure authentication, and a clean, responsive design.

---

## 🌐 Live Demo  
🔗 **[Visit the Live Demo](https://deepseek-clone-orpin-psi.vercel.app/)**  

---

## ✨ Features

- 🤖 **AI-Powered Chat** – Interact with an intelligent AI that responds to your prompts in real time.  
- 💬 **Chat Management** – Rename or delete chats seamlessly from the sidebar.  
- ⚡ **Real-Time Updates** – Messages and actions reflect instantly in the interface.  
- 🔐 **User Authentication** – Secure login and session management using **Clerk**.  
- 📱 **Responsive Design** – Works beautifully across desktop and mobile devices.  
- 🔔 **Smart Notifications** – Instant feedback using **React Hot Toast**.  

---

## 🛠️ Tech Stack

| Category | Technology |
|-----------|-------------|
| **Frontend** | React, Next.js |
| **Backend** | Node.js |
| **Database** | MongoDB |
| **Auth** | Clerk |
| **Styling** | Tailwind CSS |
| **State Management** | Context API |
| **Notifications** | React Hot Toast |
| **API Integration** | Axios |

---

## 📁 Folder Structure

```bash
deepseek-clone/
├── app/
│   ├── api/
│   │   ├── chat/
│   │   │   ├── ai/         # AI chat endpoint
│   │   │   ├── rename/     # Rename chat endpoint
│   │   │   └── delete/     # Delete chat endpoint
│   └── clerk/              # Clerk webhook integration
├── components/
│   ├── ChatLabel.jsx       # Chat label component
│   ├── PromptBox.jsx       # Chat input box component
│   └── Sidebar.jsx         # Sidebar for chat navigation
├── context/
│   └── AppContext.jsx      # Global state management
├── config/
│   └── db.js               # MongoDB connection configuration
├── models/
│   └── User.js             # User model schema
├── public/
│   └── assets/             # Static assets (icons, images)
├── styles/
│   └── globals.css         # Global styles
└── README.md               # Project documentation
```


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/elyse502/deepseek-clone.git
cd deepseek-clone
```
Install dependencies
```
npm install
```
Configure Environment Variables
Create a .env file in the root directory and add:
# 👇 Frontend (Public) Clerk Key – starts with pk_...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key

# 👇 Backend (Secret) Clerk Key – starts with sk_...
CLERK_SECRET_KEY=your-clerk-secret-key

# 👇 Your MongoDB connection string
MONGODB_URI=your-mongodb-connection-string

# 👇 Secret key used for signing webhooks (like SVIX)
SIGNING_SECRET=your-svix-signing-secret

# 👇 API key for DeepSeek or any AI/chat API service
DEEPSEEK_API_KEY=your-deepseek-api-key

Run the Development Server
```
npm run dev
```
Open in Browser
```
http://localhost:3000



