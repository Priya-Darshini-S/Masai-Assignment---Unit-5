import { useEffect, useState } from "react";
import  Form from "./Form";
import { TableItem } from "./TableItem";

export const Table = () => {
    const [user, setUser] = useState([]);

    const handleData = (data) => {
        //console.log(data);
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
    }


    return (
        <div>
           <Form getData={handleData}   />
        </div>
    );
};