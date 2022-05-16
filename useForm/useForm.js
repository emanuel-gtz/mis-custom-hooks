import React, { useState } from "react";

// En el initial state se esta recibiendo el objeto que tiene name, email y password
const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    //Clase 130: Esto se hace con la finalidad de que el input quede vacio despues de haber agregado una nueva tarea, es decir, vamos a limpiar el input
    const reset = () => {
        setValues(initialState);
    };

    const handleInputChange = ({target}) => {
        setValues({
            ...values, 
            [target.name]: target.value
        });
        console.log(values, 'Esto es');

    };

    return [values, handleInputChange, reset];

};

export default useForm;