import { useContext } from "react"
import { productsContext } from "../../context/productsContext"
import "./Orders.css"

const Orders = () => {
    const { orders, removeOrder } = useContext(productsContext)
    
    const ordersJsx =  orders.map((item, i) => {
       return (<div className="order-item" key={item.id} >
            <span>{i + 1}.</span>
            <span>${item.price}</span>
            <span>{item.date}</span>
            <span 
                className="delete-order"
                onClick={() => removeOrder(item.id)}
            >
                delete
            </span>
        </div>)
    })

    console.log(orders)

    return (
        <section className="order-page">
            <h2>Order History</h2>
            <div className="order-container">
                <div className="order-item order-header">
                    <span>N/A</span>
                    <span>Total Paid</span>
                    <span>Order Date</span>
                    <span>remove</span>
                </div>
                {ordersJsx}
            </div>
        </section>
    )
}

export default Orders