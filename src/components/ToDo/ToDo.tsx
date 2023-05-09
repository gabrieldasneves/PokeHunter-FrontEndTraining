import { TodoItem } from "../../types/TodoItemsTypes";
import "./todo.css";

type todo = TodoItem & {
    handleChange: any;
};

export function ToDo({ id, isCompleted, handleChange, text }: todo) {
    return (
        <li
            key={id}
            style={{ textDecoration: isCompleted ? "line-through" : "none" }}
        >
            <input
                type="checkbox"
                checked={isCompleted}
                onChange={handleChange}
            />
            {text}

            <button id="delete">-</button>
        </li>
    );
}
