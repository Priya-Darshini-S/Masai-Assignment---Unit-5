import { useRef, useState } from "react"
import "./Form.css"
//every recipe has title, ingredients, time to cook, an image and instructions. any extra thing you want to add is accetable.

export const Form = () => {
    let [form, setForm] = useState({
        title: "",
        ingredients: "",
        cooking_time: "",
        image_url: "",
        instructions: "",
    });
const ref = useRef(null);

const handleChange = (e) => {
    let { name, value } = e.target;


setForm({
    ...form,
    [name]: value,
});
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  //  console.log(form.title);
   const payload = {
    title: form.title,
    ingredients: form.ingredients,
    cooking_time: form.cooking_time,
    image_url: form.image_url,
    instructions: form.instructions,
   }
   fetch("http://localhost:3001/cooking", {
       method: "POST",
       body: JSON.stringify(payload),
       headers: {
           "content-type": "application/json"
       }
   });
}

return (
    <div id= "form_details">
     <form onSubmit = {handleSubmit}>
         <div>
             <label>
                 Enter Title: 
             </label>
             <input onChange ={handleChange}
           name = "title"
           type = "text"
           placeholder = "Enter Title"
       ></input>
         </div>

         <div>
             <label>
                 Enter Ingredients: 
             </label>
             <input onChange ={handleChange}
           name = "ingredients"
           type = "text"
           placeholder = "Enter Ingredients"
       ></input>
         </div>

         <div>
             <label>
                 Enter Cooking Time: 
             </label>
             <input onChange ={handleChange}
           name = "cooking_time"
           type = "text"
           placeholder = "Enter Cooking time"
       ></input>
         </div>

         <div>
             <label>
                 Enter image_url: 
             </label>
             <input onChange ={handleChange}
           name = "image_url"
           type = "url"
           placeholder = "Enter image url"
       ></input>
         </div>

         <div>
             <label>
                 Enter Instructions: 
             </label>
             <input onChange ={handleChange}
           name = "instructions"
           type = "text"
           placeholder = "Enter Instructions"
       ></input>

         </div>
      
       <input type="submit" value="Submit"></input>
     </form>
     
    </div>
)
};