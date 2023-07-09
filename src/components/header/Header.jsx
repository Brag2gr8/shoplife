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
                        <NavLink
                            to="orders"
                            style={ ({isActive}) => isActive ? activeStyle : null}
                        >
                            Orders
                        </NavLink>
                        <NavLink
                            to="about"
                            style={ ({isActive}) => isActive ? activeStyle : null}
                        >
                            About
                        </NavLink>
                    </div>
                    <div className="icon-container">
                        <div className="login">
                            <i className="fa-regular fa-user"></i>
                            <span>Login / Register</span>  
                        </div>                    
                        <Link to="cart">
                            <i className="fa-solid fa-cart-shopping">
                                <span className="cart-amount">
                                    {cartItems.length > 0 && cartAmount}
                                </span>
                            </i>
                        </Link>                
                            <i 
                                className={`fa-solid ${iconMobile}`}
                                onClick={() => setIsOpen(prev => !prev)}
                                id="small"
                            ></i>
                        <Link to="cart" id="large">
                            <i className="fa-solid fa-heart">
                                <span className="cart-amount">
                                    {favoriteItems.length > 0 && favoriteAmount}
                                </span>
                            </i>
                        </Link>  
                    </div>
                </div>
                { isOpen && 
                    <div id="menu-list">
                        <NavLink
                            to="/"
                            style={ ({isActive}) => isActive ? activeStyle : null}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="products"
                            style={ ({isActive}) => isActive ? activeStyle : null}
                        >
                            Products
                        </NavLink>
                        <NavLink
                            to="orders"
                            style={ ({isActive}) => isActive ? activeStyle : null}
                        >
                            Orders
                        </NavLink>
                        <NavLink
                            to="about"
                            style={ ({isActive}) => isActive ? activeStyle : null}
                        >
                            About
                        </NavLink>
                        <button>Logout</button>
                    </div>
                }
            </nav>
        </header>
    )
}

export default Header