import { TodoItem } from "../../types/TodoItemsTypes";

type todo = TodoItem & {
    handleChange: any;
};

export function ToDo({ id, isCompleted, handleChange, text }: todo) {
    return (
        <li key={id}>
            <input
                type="checkbox"
                checked={isCompleted}
                onChange={handleChange}
            />
            {text}
        </li>
    );
}
