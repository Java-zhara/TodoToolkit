import { useDispatch } from "react-redux";
import { toggleStatus, deleteTodo } from "../store/todoSlice";
//  toggleComplete,removeTodo

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleStatus(id))}
        // ({id})
      />
      <span>{title}</span>
      <span className="delete" onClick={() => dispatch(deleteTodo(id))}>
        {/* ({id}) */}
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
