import { v4 as uuidv4 } from 'uuid';

export interface ITodo {
    id: string;
    text: string;
    completed: boolean;
}

export enum TodoActionTypes {
    Add = 'Add_Todo',
    Delete = 'Delete_Todo',
    Check = 'Check_Todo'
}

export interface IAddTodo {
    type: TodoActionTypes.Add, payload: { text: string }
}

export type IDeleteTodo = {
    type: TodoActionTypes.Delete, id: string;
}

export type ICheckTodo = {
    type: TodoActionTypes.Check, id: string;
}

export type TodoActions = IAddTodo | IDeleteTodo | ICheckTodo;

export const initialTodo: ITodo[] = [{ completed: false, id: uuidv4(), text: "salam" }]

// export const todoReducer: React.Reducer<TodoState, TodoActions> = (state, action): TodoState => {
export const todoReducer = (state: ITodo[], action: TodoActions): ITodo[] => {
    switch (action.type) {
        case TodoActionTypes.Add:
            return [...state, {
                text: action.payload.text,
                id: uuidv4(), completed: false
            }]

        case TodoActionTypes.Delete:
            return state.filter(todo => todo.id !== action.id)

        case TodoActionTypes.Check:
            return state.map(todo =>
                todo.id === action.id ?
                    { ...todo, completed: !todo.completed } : todo)
        default:
            return state
    }
}