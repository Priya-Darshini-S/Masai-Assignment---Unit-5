import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const GroceryInput = ({ groceries, setGroceries }) => {
    const [item, setItem] = useState('');

    const handleBasket = (item) => {
        let payload = {
            item: item,
            status: false,
            id: uuidv4(),
        };

        setGroceries([...groceries, payload]);
    };

    return (
        <div>
            <div
                sx={{
                    width: 500,
                    maxWidth: '100%',
                    margin: 'auto',
                    marginTop: 1,
                }}
            >
                <input
                    onChange={(e) => setItem(e.target.value)}
                    label='Grocery'
                    id='fullWidth'
                />
                <button
                    onClick={() => handleBasket(item)}
                    sx={{ marginTop: 1 }}
                    variant='contained'
                >
                    Add To Basket
                </button>
            </div>
        </div>
    );
};

export default GroceryInput;