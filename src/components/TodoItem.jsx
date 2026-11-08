export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={todo.done ? 'todo-item done' : 'todo-item'}>
      <label>
        <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)} />
        <span>{todo.text}</span>
      </label>
      <button className="delete" onClick={() => onDelete(todo.id)} aria-label="Delete">
        ×
      </button>
    </li>
  )
}
