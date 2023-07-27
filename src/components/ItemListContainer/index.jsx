import "./styles.css"
import ItemList from "../ItemList"
import { useEffect, useState, useParams } from "react";


const ItemListContainer = () => {

    const[items, setItems] = useState([])

    //PETICION AL API
    useEffect(() => {
      fetch('../public/mocks/data.json')
        .then((response) => {
          return response.json()
        })
        .then((response) => {
          setItems(response)
        })
        .catch((error) =>{
          console.log(error)
        })
  
    }, []);

    useEffect(() => {
        console.log("Voy a filtrar en:")
    }, []) //FALTA 

    return(
        <div id = "ItemListContainer">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer 