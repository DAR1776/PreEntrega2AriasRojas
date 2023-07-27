import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import "./styles.css"
import Brand from "../Brand"
import Categories from "../Categories"
import CartWidget from "../CartWidget"

const NavbarContainer = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    useEffect(() => {
        const newData = items.filter((item)=> {
            return item.name === selectedCategory
        })
        
    }, [selectedCategory])

    return(
        <div id="navbar">

            <Link to="/">
                <Brand/>
            </Link>

            <Link to="/grises">
                <Categories name = "Hoodies Grises" onClick={setSelectedCategory}/>
            </Link>

            <Link to="/blancos">
                <Categories name = "Hoodies Blancos" onClick={setSelectedCategory}/>
            </Link>

            <Link to="/negros">
                <Categories name = "Hoodies Negros" onClick={setSelectedCategory}/>
            </Link>

            <Link>
                <CartWidget/>
            </Link>
            
        </div>
    )
}

export default NavbarContainer