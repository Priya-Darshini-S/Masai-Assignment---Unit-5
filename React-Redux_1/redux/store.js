import { createStore } from "redux";
import { reducer } from "./reducer.js";

const initState = { todo: [] };
const store = createStore(reducer, initState);

console.log(store.getState());

store.dispatch({type: "ADD_TODO", payload: {title: "Learning...", status: "false"}});
store.dispatch({type: "REMOVE_TODO", payload: {title: "Learning..."}});


console.log(store.getState());
