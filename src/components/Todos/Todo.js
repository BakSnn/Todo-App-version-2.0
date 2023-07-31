import { RiTodoFill } from 'react-icons/ri'
import { BsTrashFill } from 'react-icons/bs'
import { ImCheckmark } from 'react-icons/im'
import styles from './Todo.module.css'
function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <BsTrashFill
        className={styles.trashFillIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      <ImCheckmark
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
    </div>
  )
}
export default Todo
