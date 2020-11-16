import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addTodo, completeTodo, deleteTodo} from "../actions/todo";
import {Divider, Input, Form, Button, Row, Col, List, Checkbox} from "antd";
import {getTodoList} from "../reducers/todo";

class TodoPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectList: []
        }
    }

    onAddTodo = (values) => {
        this.props.addTodo(values.input);
    };

    onComplete = (ids) => {
        if (ids.length > 0) {
            this.props.completeTodo(ids);
        }
    };

    onDelete = (ids) => {
        console.log(ids);
        if (ids.length > 0) {
            this.props.deleteTodo(ids);
        }
        console.log(ids);
    };

    addSelectList = (e, id) => {
        if (e.target.checked) {
            this.state.selectList.push(id);
        } else {
            this.setState({selectList: this.state.selectList.filter(it => it !== id)});
        }
        console.log(id);
        console.log(this.state)
        console.log(this.state.selectList.some(it => it === id))
    };


    render() {
        return <div>
            <Row>
                <Col span={12} push={6}>
                    <Form onFinish={this.onAddTodo}>
                        <Row>
                            <Col span={11} offset={5}>
                                <Form.Item
                                    label='AddToDo Input'
                                    name='input'>
                                    <Input/>
                                </Form.Item>
                            </Col>
                            <Col span={3}>
                                <Form.Item>
                                    <Button type="primary" htmlType='submit'>保存</Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>

                    <Divider>TODO_LIST</Divider>

                    <List
                        dataSource={this.props.todoList}
                        renderItem={item => (

                            <Row>
                                <Col span={6} push={2}>
                                    <Checkbox defaultChecked={this.state.selectList.some(it => it === item.id)}
                                              onChange={(e) => this.addSelectList(e, item.id)}>{item.id}</Checkbox>
                                </Col>
                                <Col span={9} push={2}>
                                    {item.text}
                                </Col>
                                <Col span={3}>
                                    {item.flag ? <Button>已完成</Button> : <Button onClick={() => {
                                        this.onComplete([item.id])
                                    }}>完成</Button>}
                                </Col>
                                <Col span={3}>
                                    <Button onClick={() => this.onDelete([item.id])}>删除</Button>
                                </Col>
                            </Row>
                        )}
                    />


                    <Divider>TODO_LIST_OPERATION</Divider>
                    <Row>
                        <Col span={8} offset={8}>
                            <Button onClick={() => this.onDelete(this.state.selectList)}>删除选中</Button>
                            <Button onClick={() => this.onComplete(this.state.selectList)}>完成选中</Button>
                        </Col>
                    </Row>


                </Col>
            </Row>
        </div>;
    }

}

const mapStateToProps = state => {
    return {
        todoList: getTodoList(state)
    };
}


const mapDispatchToProps = dispatch => {
    return {
        addTodo: bindActionCreators(addTodo, dispatch),
        completeTodo: bindActionCreators(completeTodo, dispatch),
        deleteTodo: bindActionCreators(deleteTodo, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage)