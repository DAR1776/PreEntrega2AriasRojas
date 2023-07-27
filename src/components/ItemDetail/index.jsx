import "./styles.css"
import ItemCount from "../ItemCount"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemDetail () {
    const {id} = useParams()
    console.log("id:", id)

    const [item, setItem] = useState(null)

    useEffect(() => {
        fetch (`../../mocks/data.json`)
        .then((response) => {
            return response.json()
          })
        .then((data) => {
            const selectedItem = data.find((item) => item.id == id);
            setItem(selectedItem)
            console.log(item)
        })
    }, [id])

    const [itemCount,setItemCount] = useState(0)

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
                <img src="https://www.w3schools.com/tags/img_girl.jpg" alt="manzana" />
                <h2>Nombre</h2>
                <p>Descripcion</p>
                <p>Precio: 35$</p>
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