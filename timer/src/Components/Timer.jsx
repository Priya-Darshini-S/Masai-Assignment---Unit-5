import { useEffect, useState } from "react/cjs/react.development";

const Timer = () => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const id = setInterval(() => {
            setCounter((prev) => {
                if(prev === 20){
                    clearInterval(id);
                    return "Have a blissful Day";
                }
                return prev + 1;
            });
        }, 1000);
    }, []);

    return (<div>
                <h3> Wait till its 20...</h3>
                <h1>{counter}</h1>
            </div>)
};

export default Timer;