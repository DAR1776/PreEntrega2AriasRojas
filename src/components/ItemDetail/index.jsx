import "./styles.css"
import ItemCount from "../ItemCount"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemDetail () {
    const {id} = useParams()
    const[items, setItems] = useState([])
    const [itemCount, setItemCount] = useState(0);

    useEffect(() => {
        fetch(`../../mocks/data.json`)
          .then((response) => response.json())
          .then((data) => {
            const foundItem = data.find((item) => item.id === parseInt(id));
            setItems(foundItem);
          });
      }, [id]);

    const increment = () => {
        setItemCount(itemCount + 1);
    };

    const decrement = () => {
        if (itemCount === 0)
            setItemCount(0);
        else
            setItemCount(itemCount-1)
    };

    return(
        <div>
            <div id= "itemDetail">
                <img src={items.imagen} alt={items.nombre}/>
                <h2>{items.nombre}</h2>
                <p>Descripcion</p>
                <p> Precio: {items.precio}$</p>
                <div id= "itemCount">
                    <button onClick={increment}>+</button>
                    <ItemCount item={itemCount}/>
                    <button onClick={decrement}>-</button>
                </div>
            </div>

        </div>
    )
}

export default ItemDetail