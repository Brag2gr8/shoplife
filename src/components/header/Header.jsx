import { useContext, useState, useEffect } from "react"
import "./Header.css"
import { productsContext } from "../../context/productsContext"
import { Link, NavLink } from "react-router-dom"

import { currentUser, logout, firestore } from "../../utils/firebaseUtils"

const Header = () => {
    const {cartItems, favoriteItems} = useContext(productsContext)
    const [isOpen, setIsOpen] = useState(false)
    const user = currentUser();
    const [name, setName] = useState();
    console.log(name)


  useEffect(() => {
    const fetchNickname = async () => {
        if (user) {
          const userDoc = await firestore.collection("users").doc(user.uid).get();
          if (userDoc.exists) {
            const userData = userDoc.data();
            const nickname = userData.nickname;
            setName(nickname);
            console.log("Nickname:", nickname);
            // You can use the nickname variable as needed
          } 
        }
    };

    fetchNickname();
  }, [user]);

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
                            onClick={() => setIsOpen(false)}
                        >
                            Products
                        </NavLink>
                        <NavLink
                            to="orders"
                            style={ ({isActive}) => isActive ? activeStyle : null}
                            onClick={() => setIsOpen(false)}
                        >
                            Orders
                        </NavLink>
                        <NavLink
                            to="about"
                            style={ ({isActive}) => isActive ? activeStyle : null}
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </NavLink>
                    </div>
                    <div className="icon-container">
                        <div className="user-details">
                            <i className="fa-regular fa-user"></i>
                            { user ?
                                <span>{name}</span>
                                :
                                <span><Link to="login">Login / Register</Link></span>
                            } 
                        </div>                    
                        <Link to="cart" onClick={() => setIsOpen(false)}>
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
                        <Link to="favorite" id="large" onClick={() => setIsOpen(false)}>
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
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="products"
                            style={ ({isActive}) => isActive ? activeStyle : null}
                            onClick={() => setIsOpen(false)}
                        >
                            Products
                        </NavLink>
                        <NavLink
                            to="orders"
                            style={ ({isActive}) => isActive ? activeStyle : null}
                            onClick={() => setIsOpen(false)}
                        >
                            Orders
                        </NavLink>
                        <NavLink
                            to="about"
                            style={ ({isActive}) => isActive ? activeStyle : null}
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </NavLink>
                    </div>
                }
            </nav>
        </header>
    )
}

export default Header