import { Box, Checkbox, IconButton, Tooltip, Typography } from "@material-ui/core";
import { FC, useContext } from "react";
import { TodoActions, TodoActionTypes } from "./todo-reducer";
import { TodoContext } from "./TodoApp";
import TrashIcon from '@material-ui/icons/Delete';

const TodoList: FC = props => {
    const { dispatch, todos } = useContext(TodoContext);

    return <Box display="flex" flexDirection="column">
        {todos.map(todo => <Box key={todo.id} display="flex">
            <Typography>{todo.text}</Typography>
            <Checkbox value={todo.completed}
                onChange={(e) => dispatch({ type: TodoActionTypes.Check, id: todo.id })} />

            <Tooltip title="Delete Todo">
                <IconButton onClick={() => dispatch({ type: TodoActionTypes.Delete, id: todo.id })}>
                    <TrashIcon color="secondary" />
                </IconButton>
            </Tooltip>
        </Box>)}

    </Box>
}
export default TodoList;