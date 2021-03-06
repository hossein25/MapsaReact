import { Box } from "@material-ui/core";
import { FC, FunctionComponent, useContext, useState } from "react";
import { TodoActionTypes } from "./todo-reducer";
import { TodoContext } from "./TodoContext";
import TodoList from "./TodoList";

const Todos: FunctionComponent = (props) => {
    const [value, setValue] = useState('')
    const todoContext = useContext(TodoContext)
    return <Box>Todos
<TodoList />
        <input value={value}
            onChange={(e) => setValue(e.target.value)} placeholder="type here" />

        <button
            onClick={() => {
                todoContext.dispatch({ type: TodoActionTypes.Add, text: value });
                setValue("")
            }}>
            add todo</button>
    </Box>
}

export default Todos;