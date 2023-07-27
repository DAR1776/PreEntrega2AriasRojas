import "./styles.css"
import ItemCount from "../ItemCount"
import { useState } from "react";

function ItemDetail () {
    const [item,setItem] = useState(0)

    const increment = () => {
        setItem(item + 1);
    };

    const decrement = () => {
        if (item === 0)
            setItem(0);
        else
            setItem(item-1)
    };

    return(
        <div>
            <div id= "itemDetail">
                <img src="https://www.w3schools.com/tags/img_girl.jpg" alt="manzana" />
                <h2>Nombre</h2>
                <p>Descripcion</p>
                <p>Precio: 35$</p>
                <div id= "itemCount">
                    <button onClick={increment}>+</button>
                    <ItemCount item={item}/>
                    <button onClick={decrement}>-</button>
                </div>
            </div>

        </div>
    )
}

export default ItemDetail