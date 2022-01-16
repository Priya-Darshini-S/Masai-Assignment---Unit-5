import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actionTypes.js";

const addTodo = (title) => {
  return { type: ADD_TODO, payload: { title, status: false } };
};

const toggleTodo = (title) => {
  return { type: TOGGLE_TODO, payload: title };
};

const removeTodo = (title) => {
  return { type: REMOVE_TODO, payload: title };
};

console.log(addTodo("learning"));

export { addTodo, toggleTodo, removeTodo };