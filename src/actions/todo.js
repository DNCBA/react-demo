let nextId = 1;
export const addTodo = (text) => {
    return {
        type: "ADD_TODO",
        body: {
            "id": nextId++,
            "text": text,
            "flag": false
        }
    }
};


export const completeTodo = (ids) => {
    return {
        type: "COMPLETE_TODO",
        ids: ids
    }
};


export const deleteTodo = (ids) => {
    return {
        type: "DELETE_TODO",
        ids: ids
    }
};

