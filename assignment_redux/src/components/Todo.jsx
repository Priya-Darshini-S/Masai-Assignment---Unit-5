import React, { useState, useContext } from "react";
import { addTodo, deleteTodo } from "../Redux/action";
import { AppContext } from "../Redux/AppContextProvider";
import { nanoid } from "nanoid";

const Todo = () => {
  const [text, setText] = useState("");
    const {dispatch, getState} = useContext(AppContext)
    const [state, setstate] = useState(0)
    const {todo} = getState();

    const handleAddtoTodo = () => {
       const payload = {
         id : nanoid(5),
         title : text,
         status : false
        }
        dispatch(addTodo(payload))
        setText("")

    }

    const editTodo = (id, title) => {
      dispatch(deleteTodo(id))
      setText(title)
    }

  
  return (
      <div className="main_box">
    <div>
      <input style={{width: "200px",padding: "10px", fontSize: "20px"}}
      className="input"
      value={text}
        type="text"
        placeholder="Enter Task"
        onChange={(e) => setText(e.target.value)}
      />
      <div><button className="add" onClick={handleAddtoTodo}>Add Task</button></div>
    </div>
    <br/>
    <br/>
    <div>
    {
        todo.map((e) => (

            <div key={e.id} className="box" style={{marginBottom: "5px"}}>
              <span style={{marginRight: "5px"}}>{e.title}</span>
              <span>
              {/* <button onClick={() => editTodo(e.id, e.title)}>Edit</button> */}
              <button onClick={() => dispatch(deleteTodo(e.id))}>Delete</button>
              </span>
            </div>
        ))
    }
    </div>
    </div>
  );
};

export default Todo;