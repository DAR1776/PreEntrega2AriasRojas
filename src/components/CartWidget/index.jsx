import "./styles.css"

const CartWidget = (props) => {
    return(
        <div 
            id="cartWidget"
            onClick={props.clic}
        >
            <h6>0</h6>
            <ion-icon name="cart-outline"></ion-icon> 
        </div>
    )
}

export default CartWidget