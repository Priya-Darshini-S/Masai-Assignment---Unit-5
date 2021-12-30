import React, { useState } from 'react';
import TodoInput from './Todoinput';
import  TodoItem  from './TodoItem';
import {nanoid} from "nanoid";

const Todo = () => {
    const [lists, setLists] = useState([]);
     
    const handleClick = (data) => {
        const payload ={
            title: data,
            status: false,
            id: nanoid(7)
        }
      //  console.log("Data in paret", payload);
        setLists([...lists, payload]);
    };

    const handleToggle = (id) => {
        let updatedLists = lists.map((list) =>
            list.id === id ? { ...list, status: !list.status } : list
        );
        setLists(updatedLists);
    };
    return (
        <div>
            {/* <TodoInput setLists={setLists} lists={lists} /> */}
            <TodoInput getData={handleClick} />
            {lists.map((list) => (
                <TodoItem key={list.id} {...list} handleToggle={handleToggle} />
            ))}
        </div>
    );
};

export default Todo;