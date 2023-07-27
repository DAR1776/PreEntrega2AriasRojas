import Item from "../Item"
import "./styles.css"

function ItemList (props) {

    
    const renderItems = () => {
        return props.items.map((item) => {
            return(
                <Item key={item.id} item={item} />
            )
        })
    }

    return(
        <section>
            {renderItems()}
        </section>
    )
}

export default ItemList