import Item from '../../components/Item/Item';
import { useState, useEffect } from 'react';
import customFetch from '../utils/customFetch';
import dataFromBD from '../utils/data';

const ItemList = () => {
    const [data, setData] = useState([]);

    useEffect (() => {

        customFetch(2000, dataFromBD)
        .then(datos => setData (dataFromBD))
        .catch(err => console.log(err))

    }, []);

    return (

        <>

        {
            data.map (item => (
            <Item
                key={item.id}
                img={item.img}
                title={item.title}
                description={item.description}
                price={item.price} />
            ))
        }

        </>

    );
}

export default ItemList;