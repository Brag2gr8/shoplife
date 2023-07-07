import { useContext, useState } from "react"
import "./Header.css"
import { productsContext } from "../../context/productsContext"
import { Link, NavLink } from "react-router-dom"

const Header = () => {
    const {cartItems, favoriteItems} = useContext(productsContext)
    const [isOpen, setIsOpen] = useState(false)

    const activeStyle = { color: "var(--blue)" }

    const iconMobile = isOpen ? "fa-xmark" : "fa-bars"

    const cartAmount = cartItems.length > 9 ? "9+" 
        : cartItems.length

    const favoriteAmount = favoriteItems.length > 9 ? "9+" 
    : favoriteItems.length

    return (
        <header>
            <nav className="nav">
                <div>
                    <a href="/" className="logo-name">ShopLife</a>
                    <div className="large-screen-menu">
                        <NavLink 
                            to="products" 
                            style={ ({isActive}) => isActive ? activeStyle : null}
                        >
                            Products
                        </NavLink>
                        <NavLink>Categories</NavLink>
                        <NavLink>About</NavLink>
                    </div>
                    <div className="icon-container">
                        <div className="login">
                            <i className="fa-regular fa-user"></i>
                            <span>Login / Register</span>  
                        </div>                    
                        <i className="fa-solid fa-cart-shopping">
                            <span className="cart-amount">
                                {cartItems.length > 0 && cartAmount}
                            </span>
                        </i>
                        <i 
                            className={`fa-solid ${iconMobile}`}
                            onClick={() => setIsOpen(prev => !prev)}
                            id="small"
                        ></i>
                        <i className="fa-solid fa-heart" id="large">
                            <span className="cart-amount">
                                {favoriteItems.length > 0 && favoriteAmount}
                            </span>
                        </i>
                    </div>
                </div>
                { isOpen && 
                    <div id="menu-list">
                        <span>Home</span>
                        <span>Products</span>
                        <span>Categories</span>
                        <span>About</span>
                    </div>
                }
            </nav>
        </header>
    )
}

export default Header