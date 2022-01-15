import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        console.log(product);
        getProduct();
    });

    const getProduct = () => {
        fetch(`http://localhost:3002/products/${id}`)
        .then((d) => d.json())
        .then((res) => {
            setProduct(res);
        })
    };

    const { name, price } = product;
    return(
        <div>
            <div>{name}</div>
            <div>{price}</div>
            <div>
                This is a product....
            </div>
        </div>
    )
};