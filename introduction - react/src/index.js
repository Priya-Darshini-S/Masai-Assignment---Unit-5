import React from "react";
import ReactDom from "react-dom";

import("./index.css");
import image from "./images/download.png";

  let root = document.getElementById("root")

// let imag = document.createElement("img");
// imag.src = image;

// imag.setAttribute("class", "image");

// let div1 = document.createElement('div');
//  div1.classList.add("red");

//  let inputField = document.createElement('input');
//  inputField.setAttribute('id', 'inputField');

//  let label = document.createElement('label');
//  label.setAttribute('for', 'inputField');
//  label.innerText = 'Note: ';

//  let button = document.createElement("button");
//  button.setAttribute("class", "btn");
//  button.innerText = "submit"

//  let submit = document.createElement('button');
//  submit.innerText = 'SUBMIT';

//  let reset = document.createElement('button');
//  reset.innerText = 'RESET';

//  div1.append(label, inputField , submit, reset);





//  let detailblock = document.createElement('div');
//  detailblock.setAttribute("class", "todo_block");

//  submit.addEventListener('click', () => {
//      //alert("hello")
//      let note = document.getElementById("inputField").value;
//      let td1 = document.createElement("td");
//      td1.textContent = note;
//      detailblock.append(td1);

//          inputField.value = null;
//          inputField.focus();
//  });

//  reset.addEventListener('click', () => {
//         detailblock.innerHTML = null;
//         inputField.value = null;
//         inputField.focus();
//     });

//  root.append(imag, div1, detailblock)

// ReactDom.render(
//   React.createElement("h1", {className: "red"}, "HElllo"),
//   document.getElementById("root")
// );

//Babel is a transpiler(convert from one high level to another high level)
//to install babel:  npm install --save-dev @babel/core @babel/node @babel/preset-env @babel/preset-react babel-loader

ReactDom.render(
  <h1 className="red"> Hello werbpqvk {" "}
  <i className="test"> React <b>Bold </b></i></h1>,

  document.getElementById("root")
)
