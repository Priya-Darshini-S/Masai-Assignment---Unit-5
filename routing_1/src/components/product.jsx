import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log(products);
        getProducts();
    }, []);

    const getProducts = () => {
        fetch("http://localhost:3002/products")
        .then((d) => d.json())
        .then((res) => {
            setProducts(res);
            console.log(products);
        })
    };

    return (
        <div>
            <h1>Product Page</h1>

            {products.map(({ name, price, id }) => (
                <div style={{border: "4px solid black", margin: "auto", width: "400px", marginBottom: "4px", padding: "10px", textAlign: "center"}}>
                    <div style={{width: "200px"}}>Product: {name}</div>
                    <div>Price. Rs.: {price}</div>
                    <Link to={`/products/${id}`}>More details</Link>
                </div>
            ))}
        </div>
    )
}