# Sample-Repo
sample for testing code review ai agent

A simple to-do list app built with React and Vite. You can add, complete, filter and delete tasks, and they are saved in `localStorage`.

## Getting started

```bash
npm install
npm run dev      # start the dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build
```

## Project structure

```
src/
  main.jsx              entry point
  App.jsx               app state: todos, filter, persistence
  index.css             styles
  components/
    TodoForm.jsx        input for new tasks
    TodoList.jsx        renders the list (or an empty message)
    TodoItem.jsx        a single task with checkbox and delete button
```
