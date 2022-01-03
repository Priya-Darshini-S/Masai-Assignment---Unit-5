import { useEffect, useState } from "react"
import "./Card.css"
import { Card_details } from "./Card-detials";
//every recipe has title, ingredients, time to cook, an image and instructions. any extra thing you want to add is accetable.

export const Card = () => {
   
    const [receipe, setReceipe] = useState([]);

    useEffect(() => {
        (getreceipe());
    }, []);

    const getreceipe = () => {
        fetch("http://localhost:3001/cooking")
        .then((d) => d.json())
        .then((res) => {
            setReceipe(res);
           // console.log(res);
        });
    }
  //  console.log(receipe)
return (
   <div id="cards_details"> 
   <div> 

   {receipe.map((el) => (
               <Card_details {...el} />
           ))}
   </div>
   </div>
)
};