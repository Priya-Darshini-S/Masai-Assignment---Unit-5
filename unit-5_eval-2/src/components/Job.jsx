import { useRef, useState } from "react"
import "./Job.css"
import { nanoid } from "nanoid";
//a job has company name, job title, salary range, job description, location, job type (remote) and anything extra you want to add

export const Form = () => {
    let [form, setForm] = useState({
        name: "",
        title: "",
        location: "",
        salary: "",
        description: "",
        job_type: "",
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
   // console.log(form);
  // console.log(form.title);
   const payload = {
    name: form.name,
    title: form.title,
    location: form.location,
    salary: form.salary,
    description: form.description,
    job_type: form.job_type,
    id: nanoid(3),
      }
      console.log("payload", payload)
   fetch("http://localhost:3002/job_details", {
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
                 Enter Company Name: 
             </label>
             <input onChange ={handleChange}
           name = "name"
           type = "text"
           placeholder = "Enter Company Name"
       ></input>
         </div>

         <div>
             <label>
                 Enter Job Title: 
             </label>
             <input onChange ={handleChange}
           name = "title"
           type = "text"
           placeholder = "Enter Job Title"
       ></input>
         </div>

         <div>
             <label>
                 Enter Job Location: 
             </label>
             <input onChange ={handleChange}
           name = "location"
           type = "text"
           placeholder = "Enter Job Location"
       ></input>
         </div>

         <div>
             <label>
                 Enter Salary Range: 
             </label>
             <input onChange ={handleChange}
           name = "salary"
           type = "text"
           placeholder = "Enter Salary Range"
       ></input>
         </div>

         <div>
             <label>
                 Enter Job Description: 
             </label>
             <input onChange ={handleChange}
           name = "description"
           type = "text"
           placeholder = "Enter Description"
       ></input>
         </div>

         <div>
             <label>
                 Enter Job Type: 
             </label>
             <input onChange ={handleChange}
           name = "job_type"
           type = "text"
           placeholder = "Enter Job Type"
       ></input>
         </div>
      
       <input type="submit" value="Submit"></input>
     </form>
     
    </div>
)
};