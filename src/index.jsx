import ReactDOM from 'react-dom';
import {createStore} from "redux";
import todo from "./reducers/todo";
import {Provider} from "react-redux";
import TodoPage from "./pages/TodoPage";

// 创建store,绑定对应的reducer和项目
const store = createStore(todo);
ReactDOM.render(
    <Provider store={store}>
        <TodoPage></TodoPage>
    </Provider>
    ,
    document.getElementById('root')
);


