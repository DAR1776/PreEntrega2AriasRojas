import { Link } from "react-router-dom"
import "./styles.css"
import Brand from "../Brand"
import Categories from "../Categories"
import CartWidget from "../CartWidget"

const NavbarContainer = () => {

    function clic (){
        console.log("Clic")
    }

    return(
        <div id="navbar">

            <Link to="/">
                <Brand/>
            </Link>

            <Link to="/grises">
                <Categories name = "Hoodies Grises" clic = {clic} />
            </Link>

            <Link to="/blancos">
                <Categories name = "Hoodies Blancos" clic = {clic} />
            </Link>

            <Link to="/negros">
                <Categories name = "Hoodies Negros" clic = {clic} />
            </Link>

            <Link>
                <CartWidget clic = {clic} />
            </Link>
            
        </div>
    )
}

export default NavbarContainer