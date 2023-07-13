import { useContext } from "react"
import { productsContext } from "../../context/productsContext"
import "./Orders.css"
import { Link } from "react-router-dom"

const Orders = () => {
    const { orders, removeOrder } = useContext(productsContext)
    
    const ordersJsx =  orders.map((item, i) => {
       return (<div className="order-item" key={item.id} >
            <span>{i + 1}.</span>
            <span>${item.price}</span>
            <span>{item.date}</span>
            <i
                className="fa-solid fa-trash-can delete-order"
                onClick={() => removeOrder(item.id)}
            ></i>
        </div>)
    })

    if (orders.length < 1) {
        return (
            <div className="no-cart">
                <h1>You Have no Orders</h1>
                <button><Link to="/products">Go To Products</Link></button>
            </div>
        )
    }

    return (
        <section className="order-page">
            <h2>Order History</h2>
            <div className="order-container">
                {ordersJsx}
            </div>
        </section>
    )
}

export default Orders