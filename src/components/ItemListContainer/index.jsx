import "./styles.css"
import ItemList from "../ItemList"
import { useEffect, useState } from "react";

const ItemListContainer = (items) => {

    return(
        <div id = "ItemListContainer">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer 