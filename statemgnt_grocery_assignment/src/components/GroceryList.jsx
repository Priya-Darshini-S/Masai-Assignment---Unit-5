import React from 'react';

const GroceryList = ({
    element: { item, status, id },
    groceries,
    setGroceries,
}) => {
    const toggleStatus = (id) => {
        let updatedGroceries = groceries.map((element) => {
            return element.id === id
                ? { ...element, status: !status }
                : element;
        });

        setGroceries(updatedGroceries);
    };

    return (
        <div>
            <h1>
                {item} - {status ? 'true' : 'false'}
            </h1>
            <button onClick={() => toggleStatus(id)} variant='contained'>
                Toggle
            </button>
        </div>
    );
};

export default GroceryList;