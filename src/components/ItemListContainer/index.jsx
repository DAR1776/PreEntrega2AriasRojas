import "./styles.css"
import ItemList from "../ItemList"
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

    const[items, setItems] = useState([])
    const {categoria} = useParams()

    //NO ESTA MOSTRANDO LA CATEGORIA
    console.log(categoria)

    //PETICION AL API
    useEffect(() => {
      

      fetch('../public/mocks/data.json')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          if (categoria) {
            const filteredItems = data.filter((item) => item.categoria === categoria);
            setItems(filteredItems);
          } else {
            // Si no hay categoría especificada, mostrar todos los items
            setItems(data);
          }
        })
        .catch((error) =>{
          console.log(error)
        })
  
    }, []);

    return(
        <div id = "ItemListContainer">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer 