import { Box } from "@material-ui/core";
import { FC, FunctionComponent, useContext, useEffect, useState } from "react";
import { TodoActionTypes } from "./todo-reducer";
import { TodoContext, todosLocalStorageKey } from "./TodoApp";
import TodoList from "./TodoList";

const Todos: FunctionComponent = (props) => {
    const [value, setValue] = useState('')
    const todoContext = useContext(TodoContext);
    console.log({ todoContext });


    useEffect(() => {
        localStorage.setItem(todosLocalStorageKey, JSON.stringify(todoContext.todos))
    }, [todoContext.todos])

    return <Box>Todos
<TodoList />
        <input value={value}
            onChange={(e) => setValue(e.target.value)} placeholder="type here" />

        <button
            onClick={() => {
                todoContext.dispatch({ type: TodoActionTypes.Add, payload: { text: value } });
                setValue("")
            }}>
            add todo</button>
    </Box>
}

export default Todos;