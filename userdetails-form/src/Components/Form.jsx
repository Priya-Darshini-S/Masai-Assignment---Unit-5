import { useRef, useState } from "react"

 const Form = () => {
      let [form, setForm] = useState({
          username: "",
          age: "",
          address: "",
          department: "",
          salary: "",
          profilephoto: "",
      });
      const ref = useRef(null);

      const handleChange = (e) => {
          console.log(ref.current.files);
          let {name, value, checked, type, files} =e.target;
           value = type === "checkbox" ? checked: value;

      setForm({
          ...form,
          [name]: value,
          files,
      });
    
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
};

  



const {department, Married, Single, profilephoto} = form;
return (
    <div>
    <form onSubmit={handleSubmit}>
        <input onChange={handleChange}
        name ="username"
        type="text"
        placeholder="Enter Name"
        ></input>

        <input onChange={handleChange}
        name ="age"
        type="Number"
        placeholder="Enter Age"
        ></input>

        <input onChange={handleChange}
        name ="address"
        type="text"
        placeholder="Enter address"
        ></input>
         <input onChange={handleChange}
        name ="salary"
        type="number"
        placeholder="Enter Salary"
        ></input>
        <div>Department  
        <select onChange={handleChange} name="department" value={department}>
                    <option value="none">None</option>
                    <option value="IT">IT</option>
                    <option value="sales">Sales</option>
                </select >
                </div>

                <input className="checkBox" onChange={handleChange} name="married" type="checkbox" checked={Married} />
                <label>Married</label>    
                <input className="checkBox" onChange={handleChange} name="single" type="checkbox" checked={Single} />
                <label>Single</label>

       <div>Profile picture <input ref={ref} onChange={handleChange} type="file" ></input></div> 
      <input  type="submit" value="Submit"></input>
    </form>

    <div> <table className="head">
     <thead>
         <tr>
             <td>Profile Photo</td>
             <td>Name</td>
             <td>Age</td>
             <td>Location</td>
             <td>Salary</td>
             <td>Martial Status</td>
             <td>Department</td>
             <td>Deleted</td>
         </tr>
     </thead>
 </table></div>
    </div>

    
);
};

export default Form;