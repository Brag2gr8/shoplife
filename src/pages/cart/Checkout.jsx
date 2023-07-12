import { Link } from "react-router-dom"

const Checkout = ({cartJsx, totalPrice, coupon, setCoupon, finalPrice, paypal, visa, handleSubmit}) => (
    <>
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
                        <h5>${totalPrice.toFixed(2)}</h5>
                    </div>
                    <div>
                        <span>Shipping Fee</span>
                        <h5>Free</h5>
                    </div>
                    <div>
                        <span>Tax</span>
                        <h5>-${(totalPrice * 0.005).toFixed(2)}</h5>
                    </div>
                </div>
                <div className="coupon">
                    <h5>Apply Coupon (use "BRAGG" for 10% off)</h5>
                    <div>
                        <i className="fa-solid fa-gift"></i>
                        <input 
                            type="text"
                            placeholder="Enter Coupon code"
                            onChange={(e) => setCoupon(e.target.value)}
                        />
                        {coupon === "BRAGG" && <h5 className="coupon-price">-${(totalPrice * 0.1).toFixed(2)}</h5>}
                    </div>
                </div>
                <div className="total-price">
                    <h4>TOTAL</h4>
                    <h5>${finalPrice}</h5>
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
                                    readOnly
                                    checked= {true }            
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
    </>
)

export default Checkout