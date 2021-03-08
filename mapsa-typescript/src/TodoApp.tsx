import React, { createContext, FC, useReducer } from 'react';
import { initialTodo, ITodo, TodoActions, todoReducer } from './todo-reducer';
import Todos from './Todos';

export const TodoContext = createContext<{
    todos: ITodo[],
    dispatch: React.Dispatch<TodoActions>
}>({
    todos: [],
    dispatch: () => { }
})
export const todosLocalStorageKey = 'todos';

interface TodoAppProps { }

const TodoApp: FC<TodoAppProps> = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], () => {
        const _todos = localStorage.getItem(todosLocalStorageKey);
        if (!_todos) {
            return initialTodo
        }
        return JSON.parse(_todos)
    })

    return <TodoContext.Provider value={{ todos, dispatch }}>
        <Todos />
    </TodoContext.Provider>
}

export default TodoApp;