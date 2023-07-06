import { createContext, useEffect, useState } from "react"

const  productsContext = createContext()

const Provider = ({children}) => {
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [favoriteItems, setFavoriteItems] = useState([])

    useEffect(() => {
        const loadProducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            setProducts(data)
        }
        loadProducts()
    }, [])

    const checkItemInCart = (id) => {
        let number = 0 
        cartItems.map(el => {
            if(el.id === id) {
                number++
            }
        })

        return number
    }

    const checkItemIsFavorite = (id) => {
        let bool = false
        favoriteItems.map(item => {
            if(item.id === id) {
                bool == true
            }
        })
        return bool
    }

    const addItemToCart = (id) => {
        products.map(item => {
            if(item.id === id) {
                setCartItems(prev => {
                    return [...prev, item]
                })
            }
        })
    }
    
    const removeItemFromCart = (id) => {
        const index = cartItems.findIndex((item) => item.id === id)
        const updatedCart = [...cartItems]
        updatedCart.splice(index, 1)
        setCartItems(updatedCart)
      };
      

    return (
        <productsContext.Provider value={{
            products: products,
            add: addItemToCart,
            remove: removeItemFromCart,
            check: checkItemInCart,
            cartItems: cartItems,
        }}
        >
            {children}
        </productsContext.Provider>
    )
}

export { Provider as ProductsProvider, productsContext }