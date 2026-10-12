import { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm.jsx'
import TodoList from './components/TodoList.jsx'

const STORAGE_KEY = 'sample-todos'

function loadTodos() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

export default function App() {
  const [todos, setTodos] = useState(loadTodos)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function addTodo(text) {
    setTodos((prev) => [...prev, { id: crypto.randomUUID(), text, done: false }])
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
    )
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  function clearCompleted() {
    setTodos((prev) => prev.filter((todo) => !todo.done))
  }

  const visibleTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.done
    if (filter === 'done') return todo.done
    return true
  })
  const remaining = todos.filter((todo) => !todo.done).length

  return (
    <main className="app">
      <h1>To-Do List</h1>
      <TodoForm onAdd={addTodo} />

      <div className="filters">
        {['all', 'active', 'done'].map((name) => (
          <button
            key={name}
            className={filter === name ? 'active' : ''}
            onClick={() => setFilter(name)}
          >
            {name}
          </button>
        ))}
      </div>

      <TodoList todos={visibleTodos} onToggle={toggleTodo} onDelete={deleteTodo} />

      <footer className="summary">
        <span>
          {remaining} item{remaining === 1 ? '' : 's'} left
        </span>
        <button onClick={clearCompleted} disabled={remaining === todos.length}>
          Clear completed
        </button>
      </footer>
    </main>
  )
}
