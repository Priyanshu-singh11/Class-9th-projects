# ✅ Todo List App

A clean and responsive **Todo List** web app built with **React + Vite**. Add, update, complete, and delete your daily tasks — with data saved to localStorage so nothing is lost on refresh.

---

## 🚀 Live Demo

> Run locally or deploy on [Replit](https://replit.com)

---

## 📸 Features

- ➕ **Add Tasks** — Type a task and hit Add
- ✔️ **Mark Complete** — Checkbox strikes through finished tasks
- ✏️ **Update Tasks** — Edit any existing task
- 🗑️ **Delete Tasks** — Remove completed tasks individually
- 🧹 **Clear All** — Wipe the entire list in one click
- 💾 **LocalStorage** — Tasks are saved in your browser, survive page refresh
- 🔔 **Toast Notifications** — Get feedback on every action (add, delete, complete)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI components |
| Vite | Fast dev server & bundler |
| React Toastify | Toast notifications |
| React Icons | Icons |
| LocalStorage API | Data persistence |
| CSS | Custom styling |

---

## 📁 Project Structure

```
todo-list/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── AddTodo.jsx      # Main todo logic (add, delete, update, complete)
│   │   └── Navbar.jsx       # Top navigation bar
│   ├── store/
│   │   └── state.jsx        # State provider
│   ├── App.jsx              # Root component
│   ├── App.css              # All styles
│   └── index.jsx            # Entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Priyanshu-singh11/Class-9th-projects.git
cd Class-9th-projects/todo-list
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 📖 How to Use

1. **Type** your task in the input box
2. Click **Add** to add it to the list
3. Click the **checkbox** to mark it as done (text turns red with strikethrough)
4. Click **Update** to edit a task
5. Click **Delete** to remove a completed task
6. Click **Clear-All** to remove everything

---

## 👤 Author

**Priyanshu Singh**
- GitHub: [@Priyanshu-singh11](https://github.com/Priyanshu-singh11)

---

## 📄 License

This project is open source and available under the [MIT License](../LICENSE).
