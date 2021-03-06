import { Box } from "@material-ui/core";
import { FC, useContext } from "react";
import { TodoContext } from "./TodoContext";

const TodoList: FC = props => {
    const todoContext = useContext(TodoContext);

    return <Box display="flex">
        {todoContext.todos.map(todo => <Box>{todo.text}</Box>)}

    </Box>
}
export default TodoList