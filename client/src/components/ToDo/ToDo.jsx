import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {input} from '../../actions/inputUpdateAction';
import {deleteTask,editTask, isActive} from '../../actions/tasksAction';
import {read, change} from '../../actions/editFieldAction';
import Button from '../Button/Button';
import './ToDo.css'



class ToDo extends Component {

    deleteTask = ({target}) => {
        let id = target.closest('.task').id; // takes closest element with className="task"
        console.log(id);
        axios.delete(`/tasks/${id}`).then(({status}) => {
            if (status === 200) {
                this.props.deleteFunc(id);
            }
        })
    };


    editTask = () => {
        axios.put(`/tasks/${this.props.id}`, {task:this.props.editField})
            .then(({status, data}) => {
                if (status === 200) {
                    console.log('id :',this.props.id);
                    console.log('data:',data);
                    this.props.editTaskFunc(this.props.id, data.task);
                    this.update();
                }
            })
    };

    // editTask = () => {
    //     let text = () => this.props.editField;
    //
    //     async function request() {
    //         let input = await text();
    //         console.log(input);
    //         return input;
    //     }
    //
    //     request().then(changedData => axios.put(`http://localhost:3001/tasks/${this.props.id}`, {task:changedData})
    //         .then(({status, data}) => {
    //             console.log(data);
    //             if (status === 200) {
    //                 this.props.editTaskFunc(this.props.id, data);
    //                 this.update();
    //             }
    //         }));
    //
    // };

    update = () => {
        this.props.isActiveToggle(this.props.id)
    };

    readValue = () => {
        this.props.read(this.props.text);
        this.update();
    };

    changeValue = (e) => {
        this.props.change(e.target.value)
    };

    render() {
        return (
            this.props.isActive ?
                <li className='task' id={this.props.id}>
                    <input className='input' onChange={this.changeValue} type="text" value={this.props.editField}  name='input'/>
                    <div>
                        <Button onClick={this.editTask} text='Save'/>
                        <Button onClick={this.update} text='Cancel'/>
                    </div>
                </li>
            :
                <li className='task' id={this.props.id}>
                    {this.props.text}
                    <div>
                        <Button onClick={this.readValue} text='Edit'/>
                        <Button onClick={this.deleteTask} text='Delete'/>
                    </div>
                </li>
        )}
}

function mapStateToProps (state) {
    return {
        editField: state.editField,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        deleteFunc:function(id) {
            dispatch(deleteTask(id));
        },
        editTaskFunc: function (id, input){
            dispatch(editTask(id, input))
        },
        isActiveToggle:function(id) {
            dispatch(isActive(id));
        },
        read:function(text) {
            dispatch(read(text));
        },
        change:function(text) {
            dispatch(change(text));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDo);


