import React from 'react';
import { connect } from 'react-redux';
import ToDo from '../ToDo/ToDo';
import './ToDoList.css'


const ToDoList = (props)=>
  (
    <ul className='list'>{props.inputsArr.map((el => <ToDo text={el.task} id={el._id} key={el._id} isActive={el.isActive}/>))}</ul>
  );

function mapStateToProps (state) {
    return {
        inputsArr: state.inputsArr
    }
}

export default connect(mapStateToProps) (ToDoList);
