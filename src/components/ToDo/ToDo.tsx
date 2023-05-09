import { TodoItem } from "../../types/TodoItemsTypes";
import "./todo.css";
import DELETE from "../../assets/delete.svg";

type todo = TodoItem & {
  handleChange: any;
  children: string | JSX.Element | JSX.Element[];
};

export function ToDo({ id, isCompleted, handleChange, text, children }: todo) {
  return (
    <li key={id}>
      <input
        className=""
        type="checkbox"
        checked={isCompleted}
        onChange={handleChange}
        id={id.toString()}
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
        <label htmlFor={id.toString()}>{text}</label>
      </span>
      {children}
    </li>
  );
}
