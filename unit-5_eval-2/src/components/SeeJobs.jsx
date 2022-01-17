import { useEffect,useState} from "react";
export const Items = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        fetch("http://localhost:3002/job_details")
        .then((d) => d.json())
        .then((res) => {
            setUser(res);
        });
    }

   console.log(user);


  

return (
<div>
{
    user.map((e) => (
         // console.log(e.title)
        <div className="box" style={{marginBottom: "5px"}}>
          <div style={{marginRight: "5px"}}>Title: {e.title}</div>
          <div style={{marginRight: "5px"}}>company: {e.name}</div>
          <div style={{marginRight: "5px"}}>Location: {e.location}</div>
          <div style={{marginRight: "5px"}}>Salary: {e.salary}</div>
          <div style={{marginRight: "5px"}}>Job Type: {e.job_type}</div>
          <div style={{marginRight: "5px"}}>Description: {e.description}</div>
        </div>
    ))
}
</div>
)}