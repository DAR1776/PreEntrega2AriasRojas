import "./styles.css"

function Item (props) {
    return(
        <div className="itemContainer">
            <img src={props.item.imagen} alt={props.item.name} />
            <h3 id="itemName">{props.item.nombre}</h3>
            <h4>Stock: {props.item.unidadesDisponibles}</h4>
        </div>
    )
}

export default Item