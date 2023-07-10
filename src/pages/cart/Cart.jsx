import { useState, useContext } from "react"
import { productsContext } from "../../context/productsContext"
import paypal from "../../assets/paypal.png"
import visa from "../../assets/visa.png"
import "./Cart.css"
import { Link } from "react-router-dom"

const Cart = () => {
    const [coupon, setCoupon] = useState("")

    const {
        cartItems,
        addToCart, 
        checkItemInCart, 
        removeFromCart,
    } = useContext(productsContext)

    const arrangedCartArr = []
    let total = 0

    cartItems.map(item => {
        const isPicked = arrangedCartArr.some(el => el === item)

        if(!isPicked) {
            arrangedCartArr.push(item)
        }
    })
    
    const cartJsx = arrangedCartArr.map(item => {
        const noOfProductInCart = checkItemInCart(item.id)

        total += item.price

        return (
            <>
                <div className="cart-item" key={item.id}>
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
            </>
        )
    })
    
    const handleSubmit = () => {
        
    }

    if (cartItems.length === 0) {
        return (
            <div className="no-cart">
                <h1>No Item In Cart</h1>
                <button><Link to="/">Go To Products</Link></button>
            </div>
        )
    }

    const finalPrice = coupon ? (total * 0.805).toFixed(2) : (total * 0.995).toFixed(2)
    
    return (
        <section className="cart-page">
            <h2>CHECKOUT</h2>
            <div className="cart">
                <div className="cart-items-container">
                    {cartJsx}
                </div>

                <div className="payment-section">
                    <h3>Make Payment</h3>
                    <div className="price-details">
                        <div>
                            <span>Total Amount</span>
                            <h5>${total.toFixed(2)}</h5>
                        </div>
                        <div>
                            <span>Shipping Fee</span>
                            <h5>Free</h5>
                        </div>
                        <div>
                            <span>Tax</span>
                            <h5>{-(total * 0.005).toFixed(2)}</h5>
                        </div>
                    </div>
                    <div className="total-price">
                        <h4>TOTAL</h4>
                        <h5>${(total * 0.995).toFixed(2)}</h5>
                    </div>
                    <div className="coupon">
                        <h5>Apply Coupon (use "Bragg" for 10% off)</h5>
                        <div>
                            <i className="fa-solid fa-gift"></i>
                            <input 
                                type="text"
                                placeholder="Enter Coupon code"
                                onChange={(e) => setCoupon(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="payment">
                        <h5>Select Payment Method</h5>
                        <div className="payment-type">
                            <div className="radio">
                                <label>
                                    <input
                                        type="radio"
                                        name="radio"         
                                        value="card"               
                                    />
                                    <i className="fa-solid fa-credit-card"></i>
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="radio"          
                                        value="paypal"                             
                                    />
                                    <img src={paypal} alt="paypal"/>
                                </label>
                            </div>
                            <form className="card-details" onSubmit={handleSubmit}>
                                <h4>Payment Details</h4>
                                <div>
                                    <input 
                                        placeholder="Enter Card Name"
                                        type="text"
                                        required
                                    />
                                </div>
                                <div className="visa">
                                    <input 
                                        placeholder="0000 0000 0000 0000"
                                        type="tel"
                                        required
                                    />
                                    <img src={visa} />
                                </div>
                                <div className="cvv">
                                    <input 
                                        placeholder="02/25"
                                        type="tel"
                                        required
                                    />
                                    <input 
                                        placeholder="CVV"
                                        type="tel"
                                        required
                                    />
                                </div>
                                <button>Pay ${finalPrice}</button>
                            </form>
                        </div>
                        <div className="shop-more">
                            <h3>Cart Looks Empty??</h3>
                            <Link to="/products">Shop More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart