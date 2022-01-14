import { useEffect, useState } from "react";
import  Form from "./Form";
import { TableItem } from "./TableItem";

export const Table = () => {
    const [user, setUser] = useState([]);
     
    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        fetch("http://localhost:3002/users")
        .then((d) => d.json())
        .then((res) => {
            setUser(res);
        });
    }

    const handleData = (data) => {
        console.log("data", data);
        let martialStatus = "";
        if(data.married){
            martialStatus = "married";
        }
        if(data.single){
            martialStatus = "single";
        }

        const userData = {
            username: data.username,
            age: data.age,
            address: data.address,
            salary: data.salary,
            department: data.department,
            martialStatus: martialStatus,
            profilePhoto: data.file[0].name,
        }
        fetch("http://localhost:3002/users", {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                "content-type": "application/json",
            }
        }) .then(() => {
            getUsers();
        });
        console.log("userData", userData)

    }
   

    return (
        <div>
           <Form getData={handleData}   />
        </div>
    );
};