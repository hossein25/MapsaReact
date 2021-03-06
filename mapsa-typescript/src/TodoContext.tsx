import { createContext, FC, useReducer } from "react";
import { initialTodo, TodoActions, todoReducer, ITodo } from "./todo-reducer";

export const TodoContext = createContext<{
    todos: ITodo[],
    dispatch: React.Dispatch<TodoActions>
}>({
    todos: [],
    dispatch: () => { }
});

export const TodoProvider: FC = ({ children }) => {
    const [todos, dispatch] = useReducer(todoReducer, initialTodo);

    return <TodoContext.Provider value={{ todos, dispatch }}>{children}</TodoContext.Provider>
}