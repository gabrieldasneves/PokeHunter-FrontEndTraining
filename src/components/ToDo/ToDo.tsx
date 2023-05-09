import { TodoItem } from "../../types/TodoItemsTypes";
import "./todo.css";
import DELETE from "../../assets/delete.svg";

type todo = TodoItem & {
  handleChange: any;
};

export function ToDo({ id, isCompleted, handleChange, text }: todo) {
  return (
    <li key={id}>
      <input
        className=""
        type="checkbox"
        checked={isCompleted}
        onChange={handleChange}
      />
      <span
        style={{
          textDecoration: isCompleted ? "line-through" : "none",
          marginLeft: "5px",
          marginRight: "5px",
          maxWidth: "300px",
          wordBreak: "break-all",
        }}
      >
        {text}
      </span>
      <button id="delete">
        <img src={DELETE} alt="delete" />
      </button>
    </li>
  );
}
