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
                    <div className="icon-container">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <i className={`fa-solid ${iconMobile}`}
                            onClick={() => setIsOpen(prev => !prev)}
                        ></i>
                    </div>
                </div>
                { isOpen && 
                    <div className="menu-list">
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