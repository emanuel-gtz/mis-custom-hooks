import React, { useState } from "react";

const useCounter = (initialState = 10) => { // Si no mandan valor, el valor sera 10, si si mandan algo, el valor sera lo que sea que se alla recibido

    const [counter, setCounter] = useState(initialState);

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {  
        setCounter(counter - 1);
    };

    const reset = () => {
        setCounter(counter)
    };

    return {
        counter,
        increment,
        decrement,
        reset
    };

};

export default useCounter;
