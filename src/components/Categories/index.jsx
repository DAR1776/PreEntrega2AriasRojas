import "./styles.css"

const Categories = (props) => {
    return(
        <div 
            className="boton" 
            onClick={props.clic}
        >
            {props.name}
        </div>
    )
}

export default Categories