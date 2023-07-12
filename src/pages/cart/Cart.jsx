import { useState, useContext } from "react"
import { productsContext } from "../../context/productsContext"
import { Link } from "react-router-dom"
import {nanoid} from "nanoid"
import Checkout from './Checkout'
import paypal from "../../assets/paypal.png"
import visa from "../../assets/visa.png"
import loading from "../../assets/loading.gif"
import "./Cart.css"

const Cart = () => {
    const [coupon, setCoupon] = useState("")
    const [isProcess, setIsProcess] = useState(false)
    const [isOrder, setIsOrder] = useState(false)

    const {
        cartItems,
        addToCart, 
        checkItemInCart, 
        removeFromCart,
        totalPrice,
        setCartItems,
        addToOrders,
        setTotalPrice
    } = useContext(productsContext)

    const arrangedCartArr = []
    let total = 0

    cartItems.map(item => {
        const isPicked = arrangedCartArr.some(el => el.id === item.id)

        if(!isPicked) {
            arrangedCartArr.push(item)
        }
    })
    
    const cartJsx = arrangedCartArr.map(item => {
        const noOfProductInCart = checkItemInCart(item.id)

        return (
            <div key={item.id}>
                <div className="cart-item">
                    <img src={item.image}/>
                    <div className="cart-item-details">
                        <h4>{item.title}</h4>
                        <div className="cart-item-control-btn">
                            <span className="bold">Quantity: </span>
                            <i 
                                className="fa-solid fa-minus" 
                                onClick={() => removeFromCart(item.id)}
                            >
                            </i>
                            <span>{noOfProductInCart}</span> 
                            <i className="fa-solid fa-plus" onClick={() => addToCart(item.id)}
                            ></i>
                        </div>
                        <p><span className="bold"> Total: </span>${(item.price * noOfProductInCart).toFixed(2)}</p>
                    </div>
                </div>
                <hr />
            </div>
        )
    })

    const finalPrice = coupon === "BRAGG" ? (totalPrice * 0.805).toFixed(2) : (totalPrice * 0.995).toFixed(2)

    const handleSubmit = (e) => {
        e.preventDefault()
        const date = new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
        addToOrders({
            id: nanoid(),
            date: date,
            price: finalPrice
        })
        setIsProcess(true)
        setTimeout(() => {
            setIsProcess(false)
            setIsOrder(true)
            setCartItems([])
            setTotalPrice(0)
        }, 2000)
    }
    
    return (
        <section className="cart-page">
            {isProcess && (
                <div className="modal">
                    <img src={loading}/>
                    <h2>Processing...</h2>
                </div>
            )}
            {isOrder && (
                <div className="modal">
                    <button 
                        className="close-modal"
                        onClick={() => setIsOrder(false)}
                    >
                        X
                    </button>
                    <h2>Your Order Was Successfully Placed</h2>
                    <button className="view-order-btn">
                        <Link to="/orders">View Orders</Link>
                    </button>
                </div>
            )}
            {cartItems.length === 0 ?
                (
                    <div className="no-cart">
                        <h1>No Item In Cart</h1>
                        <button><Link to="/products">Go To Products</Link></button>
                    </div>
                ) 
                : <Checkout 
                cartJsx={cartJsx}
                totalPrice={totalPrice}
                coupon={coupon}
                setCoupon={setCoupon}
                finalPrice={finalPrice}
                paypal={paypal}
                visa={visa}
                handleSubmit={handleSubmit}
                />
            }
        </section>
    )
}

export default Cart