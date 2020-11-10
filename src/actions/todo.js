export const addTodo = (text) => {
    return {
        type: "ADD_TODO",
        text: text
    }
}


export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        id: id
    }
}