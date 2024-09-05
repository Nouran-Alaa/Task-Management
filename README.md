![Taskify Logo](./public/images/logo.png)

Taskify is a powerful and user-friendly task management application designed to help you stay organized and productive. With features like drag-and-drop task management, customizable task phases, and real-time search, Taskify makes it easy to manage your tasks efficiently.

## ✨ Features

- **📝 Create Tasks:** Easily add new tasks with relevant details.
- **🗑️ Delete Tasks:** Remove tasks that are no longer needed with a simple click.
- **🔄 Drag-and-Drop:** Organize your tasks effortlessly using drag-and-drop functionality.
- **📊 Task Phases:** Manage tasks across different phases (e.g., Backlog, In Progress, Completed).
- **🔍 Search and Filter:** Quickly find tasks using the built-in search functionality.

## 📂 Project Structure

The project is organized into the following structure:

```plaintext
src/
├── features/
│   ├── kanban/
│   │   ├── AutoResizeInput.jsx
│   │   ├── Columns.jsx
│   │   ├── CreateColumn.jsx
│   │   ├── KanbanBoard.jsx
│   │   ├── kanbanSlice.js
│   │   └── KanbanTitle.jsx
│   ├── list/
│   │   ├── ListPagination.jsx
│   │   ├── ListTable.jsx
│   │   ├── TableBody.jsx
│   │   └── TableHead.jsx
│   ├── tasks/
│   │   ├── CreateTask.jsx
│   │   ├── QuickView.jsx
│   │   ├── TaskCard.jsx
│   │   ├── TaskForm.jsx
│   │   └── ViewTask.jsx
│   ├── user/
│   │   ├── Login.jsx
│   │   └── Signup.jsx
├── helper/
├── ui/
├── App.jsx
└── index.css
```

## 🚀 Getting Started

To get up and running with Taskify, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/KarimAdel-1/taskify.git
   cd taskify
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Start the JSON server:**
   ```bash
   npm run server
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

6. **Preview the production build:**
   ```bash
   npm run preview
   ```

## 🛠️ Tech Stack

- **⚛️ React:** A JavaScript library for building user interfaces.
- **🛠️ Redux Toolkit:** A powerful state management library.
- **📦 React Beautiful DnD:** For implementing drag-and-drop interfaces.
- **🎨 Tailwind CSS:** A utility-first CSS framework for styling.
- **⚡ Vite:** A fast build tool for development.
- **🔤 FontAwesome:** An icon library for adding visual elements.
- **📡 JSON Server:** A mock REST API for development and testing.

## 📜 Available Scripts

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the app for production.
- **`npm run lint`**: Lint the project files.
- **`npm run preview`**: Preview the production build.
- **`npm run server`**: Start the JSON server.
