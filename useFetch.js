import React, {useState, useEffect, useRef} from "react";
const useFetch = (url) => {

    //clase 116 //* En este punto, tenemos el problema de que al momento en el que usamos el boton show/hide antes de que se haga la peticion despues de 4 segundos, tendremos un problema, ya que al llamar y cancelar la renderizacion sin que se alla completado la peticon dentro del componente que queremos renderizar, tendremos problemas ya que no dejamos que se complete la peticion
    // la finalidad de este isMounted, es matener la referencia cuanto el hook esta montado, es decir, cuando el componente esta siendo mostrado en pantalla
    const isMounted = useRef(true);
    const [state, setState] = useState({
        data: null, 
        loading: true,
        error: null
    });
    //Clase 116
    useEffect(() => {

        // El codigo dentro de este return, es lo que va a suceder despues de que el componente sea desmontado, la referencia la usaremos dentro de una de las lineas de codigo del fetch. 
        // Este efect, solo se realizara la primera ves que se renderize el componente, pero es importante no olvidar, que return solo se activa cuando el componente se descuelga
        return () => {
            isMounted.current = false;
        };
    }, []);
    useEffect(() => {
        setState({
            data: null,
            loading: true, // Si esta cargando, ya que estamos haciendo la peticion
            error: true
        });

        fetch(url)
            .then(resp =>  resp.json())
            .then(data => {
                // clase 116, en este caso, agregaremos un setTimemout para retrasar esto 4 segundos, esto solo con la finalidad de ver el error que se produce

                    //Clase 116. //* haremos uso de la referencia isMounted.current para mandar el setState
                    //* Si es true, quiere decir que aun esta montado y podemos llamar este setState, de lo contario, no hara nada mas que el console.log que le designamos, solo con la intencion de que retornara algo nomas por nomas
                    if(isMounted.current) {
                        setState({
                            loading: false,
                            error: null,
                            data 
                        });
                    } else {
                        console.log('Set state no se llamo')
                    };
            });
    }, [url])
    return state;
};
export default useFetch;
