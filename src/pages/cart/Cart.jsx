import { useContext } from "react"
import { productsContext } from "../../context/productsContext"

const Cart = () => {
    const {cartItems} = useContext(productsContext)

    return (
        <section className="cart">
            <div></div>
        </section>
    )
}

export default Cart