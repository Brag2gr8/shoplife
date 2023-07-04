import { useState } from "react"
import "./Header.css"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const iconMobile = isOpen ? "fa-xmark" : "fa-bars"

    return (
        <header>
            <nav className="nav">
                <div>
                    <h1>ShopLife</h1>
                    <div className="large-screen-menu">
                        <span>Products</span>
                        <span>Categories</span>
                        <span>About</span>
                    </div>
                    <div className="icon-container">
                        <div className="login">
                            <i className="fa-regular fa-user"></i>
                            <span>Login / Register</span>  
                        </div>                    
                        <i className="fa-solid fa-cart-shopping"></i>
                        <i 
                            className={`fa-solid ${iconMobile}`}
                            onClick={() => setIsOpen(prev => !prev)}
                            id="small"
                        ></i>
                        <i className="fa-regular fa-heart" id="large"></i>
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