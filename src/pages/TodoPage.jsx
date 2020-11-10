import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addTodo, deleteTodo} from "../actions/todo";
import {Divider, Input} from "antd";

class TodoPage extends React.Component {


    render() {
        return <div>

            <Input/>

        </div>;
    }

}

const mapStateToProps = state => {
    return {
        // todoList: state.todoList
    };
}


const mapDispatchToProps = dispatch => {
    return {
        addTodo: bindActionCreators(addTodo, dispatch),
        deleteTodo: bindActionCreators(deleteTodo, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage)