import "./styles.css"
import { Link } from "react-router-dom"

function Item (props) {
    return(
        <div className="itemContainer">
            <img src={props.item.imagen} alt={props.item.name} />
            <h3 id="itemName">{props.item.nombre}</h3>
            <Link to={`/item/${props.item.id}`}> 
                <h4>Ver item</h4>
            </Link>
            <h4>Stock: {props.item.unidadesDisponibles}</h4>
        </div>
    )
}

export default Item