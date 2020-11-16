let defaultState = {
    "todoList": []
}
const todo = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                "todoList": [...state.todoList, action.body]
            };
        case 'COMPLETE_TODO':
            return {
                ...state,
                "todoList": state.todoList.map(item => {
                    if (action.ids.some(id => id === item.id)) {
                        item.flag = true;
                    }
                    return item;
                })
            };
        case 'DELETE_TODO':
            return {
                ...state,
                "todoList": state.todoList.filter(item => {
                    if (action.ids.some(id => id === item.id)) {
                        return false;
                    }
                    return true;
                })
            };
        default:
            return state;
    }
}


export const getTodoList = (state) => {
    //你可以做其他的业务逻辑对数据进行处理并且可以公用
    return state.todoList;
}


export default todo;