import { useState } from 'react';
import "../ItemCount/ItemCount.scss";

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState (initial)

    const sumar = () => {
        if (stock > count){
            setCount (count + 1)
        }
    }

    const restar = () => {
        if (count > 1){
            setCount (count - 1)
        }
    }

    const agregar = () => {
        onAdd (count)
    }


    return (

        <>
            <div className="containerBoton">
                <div className="boton1"><button className='botones' onClick={restar}> - </button></div>
                <div><label className="count"> {count} </label></div>
                <div className="boton2"><button className='botones' onClick={sumar}> + </button></div>
            </div>
            <div className="agregar">
            <button className="botonAgregar" onClick={agregar}>AGREGAR AL CARRITO</button>
            </div>
        </>

    )

}

export default ItemCount;