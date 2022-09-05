// import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer (props){

    // const onAdd = (cantidad) => {
    //     alert(`Se agregó ${cantidad}`);
    // }

    return(
        <>
        {/* <ItemCount stock = {5} initial = {1} onAdd = {onAdd} /> */}

        <div className="container">
        <div className="row">
        <ItemList />
        </div>
        </div>
        </>
    )
}