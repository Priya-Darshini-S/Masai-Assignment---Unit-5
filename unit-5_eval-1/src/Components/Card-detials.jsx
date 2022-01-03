import "./Card.css"

export const Card_details = ({ title, cooking_time }) => {
    return (
        <div className="mainList">
           <div className="title">Receipe: {title}</div>
           <div className="cooking">Time taken: {cooking_time}</div>
        </div>
    );
};