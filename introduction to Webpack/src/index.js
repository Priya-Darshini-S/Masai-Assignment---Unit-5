import("./index.css");

  let root = document.getElementById("root")


let div1 = document.createElement('div');
 div1.classList.add("red");

 let inputField = document.createElement('input');
 inputField.setAttribute('id', 'inputField');

 let label = document.createElement('label');
 label.setAttribute('for', 'inputField');
 label.innerText = 'Note: ';

 let button = document.createElement("button");
 button.setAttribute("class", "btn");
 button.innerText = "submit"

 let submit = document.createElement('button');
 submit.innerText = 'SUBMIT';

 let reset = document.createElement('button');
 reset.innerText = 'RESET';

 div1.append(label, inputField , submit, reset);





 let detailblock = document.createElement('div');
 detailblock.setAttribute("class", "todo_block");

 submit.addEventListener('click', () => {
     //alert("hello")
     let note = document.getElementById("inputField").value;
     let td1 = document.createElement("td");
     td1.textContent = note;
     detailblock.append(td1);

         inputField.value = null;
         inputField.focus();
 });

 reset.addEventListener('click', () => {
        detailblock.innerHTML = null;
        inputField.value = null;
        inputField.focus();
    });

 root.append(div1, detailblock)