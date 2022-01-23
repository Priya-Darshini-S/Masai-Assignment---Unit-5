import React from 'react';
import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { logout } from '../Redux/Auth/action';
import { addTodo, deleteTodo } from '../Redux/Todos/action';
import './todo.css'


const Todo = () => {
    const [text, setText] = useState("");
    const {loading, todo, error} = useSelector ((state) => ({
        loading : state.todoState.loading,
        todo : state.todoState.todo,
        error : state.todoState.error
    }))

    const dispatch = useDispatch()

    return (
        <div>
            <div className='input_box'>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Add Something'/>
            </div><div>
            <button
            onClick={() => {
                dispatch(addTodo({
                    title : text,
                    status : false
                }))
                setText("")
            }}
            >ADD TODO</button>
            </div><div> <button onClick={() => {
                dispatch(logout())
            }}>Logout</button></div>
           

            {
                todo.map((e, i) => (
                    <div key={i} className='todos'>
                        <p>{e.title}</p>
                        <div style={{margin: "0px"}}>
                        <button style={{border: "1px solid black", margin: "0px"}} onClick={() => {
                            dispatch(deleteTodo(i))
                        }}>Delete</button></div>
                      <div style={{margin: "0px"}}>  <button style={{border: "1px solid black", margin: "0px"}} onClick={ () => {

                            dispatch(deleteTodo(i))
                            setText(e.title)
                        }

                        }>Edit</button></div>
                    </div>
                ))
            }


        </div>
    )
}

export default Todo