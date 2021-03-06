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
    type: TodoActionTypes.Add, text: string
}

export type IDeleteTodo = {
    type: TodoActionTypes.Delete, id: string;
}

export type ICheckTodo = {
    type: TodoActionTypes.Check, id: string;
}

export type TodoActions = IAddTodo | IDeleteTodo | ICheckTodo;

export const initialTodo: ITodo[] = [{ completed: false, id: "1", text: "salam" }]

// export const todoReducer: Reducer<TodoState, TodoActions> = (state, action): TodoState => {
export const todoReducer = (state: ITodo[], action: TodoActions): ITodo[] => {
    switch (action.type) {
        case TodoActionTypes.Add:
            return [...state, { text: action.text, id: "2", completed: false }]

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