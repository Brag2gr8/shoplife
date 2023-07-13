import { useContext, useState, useEffect } from "react"
import "./Header.css"
import { productsContext } from "../../context/productsContext"
import { Link, NavLink } from "react-router-dom"
import { auth, firestore, getCurrentUser } from "../../utils/firebaseUtils"

const Header = () => {
  const { cartItems, favoriteItems } = useContext(productsContext)
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState("")

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await getCurrentUser()
        if (user) {
          const userDoc = await firestore.collection("users").doc(user.uid).get()
          if (userDoc.exists) {
            const userData = userDoc.data()
            const nickname = userData.nickname
            setName(nickname)
          }
        }
      } catch (error) {
      }
    }
    fetchUserData()
})

    const activeStyle = { 
        fontWeight: "700",
        borderBottom: "3px solid var(--blue)",
        paddingBottom: "5px"
    }

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
                            { name ?
                                <>
                                    <i className="fa-regular fa-user"></i>
                                    <span>{name}</span>
                                </>
                                :
                                <Link to="login">
                                    <i className="fa-regular fa-user"></i>
                                    <span>Guest</span>
                                </Link>
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