import "../Item/Item.scss";
import ItemCount from "../ItemCount/ItemCount";


const Item = ({id, img, title, description, price}) => {

    const onAdd = (cantidad) => {
        alert(`Se agregó ${cantidad}`);
    }

    return (

        
        <>

        <div className="col-4">

        <div className="item-container">

            <div className="item-image">
                <img className="image" src={img} alt="Same alt value" />
            </div>

            <div className="item-info">
                <h4>{title}</h4>
                <p>{description}</p>
                <h4>{price}</h4>
            </div>
            
            <div className="divBotonDetalle">
                <button className="botonDetalle">DETALLES</button>
            </div>
            <ItemCount stock = {5} initial = {1} onAdd = {onAdd} />
            </div>

        </div>

        </>
        
        );
}

export default Item;