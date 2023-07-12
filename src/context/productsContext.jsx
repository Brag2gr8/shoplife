import { createContext, useEffect, useState } from "react";

const productsContext = createContext();

const Provider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favoriteItems, setFavoriteItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [orders, setOrders] = useState([]);

    // Load products from API or localStorage
    useEffect(() => {
        const loadProducts = async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
        };

        const savedCartItems = localStorage.getItem('cartItems');
        if (savedCartItems) {
        setCartItems(JSON.parse(savedCartItems));
        }

        const savedFavoriteItems = localStorage.getItem('favoriteItems');
        if (savedFavoriteItems) {
        setFavoriteItems(JSON.parse(savedFavoriteItems));
        }

        const savedOrders = localStorage.getItem('orders');
        if (savedOrders) {
        setOrders(JSON.parse(savedOrders));
        }

        const savedPrice = localStorage.getItem('totalPrice');
        if (savedPrice) {
        setTotalPrice(JSON.parse(savedPrice));
        }

        loadProducts();
    }, []);

    // Save cartItems, favoriteItems, and orders to localStorage
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
    }, [totalPrice]);

    useEffect(() => {
        localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
    }, [favoriteItems]);

    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders));
    }, [orders]);

    const getProduct = (id) => {
        return products.find((item) => item.id === id)
    }

    const addToCart = (id) => {
        const itemToAdd = products.find((item) => item.id === id);
        if (itemToAdd) {
        setCartItems((prevCartItems) => [...prevCartItems, itemToAdd]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + itemToAdd.price);
        }
    };

    const removeFromCart = (id) => {
        const index = cartItems.findIndex((item) => item.id === id)
        const updatedCart = [...cartItems]
        updatedCart.splice(index, 1)
        setCartItems(updatedCart)
        products.map(item => {
            if (item.id === id) {
                setTotalPrice(prev => prev - item.price)
            }
        })
    }; 

    const checkItemInCart = (id) => {
        let number = 0 
        cartItems.map(el => {
            if(el.id === id) {
                number++
            }
        })

        return number
    }

  
    const addToFavorite = (id) => {
      const itemToAdd = products.find((item) => item.id === id);
      if (itemToAdd) {
          setFavoriteItems((prevFavoriteItems) => [...prevFavoriteItems, itemToAdd]);
        }
    };
    
    const removeFromFavorite = (id) => {
        setFavoriteItems((prevFavoriteItems) =>
        prevFavoriteItems.filter((item) => item.id !== id)
        );
    };
    
    const checkItemInFavorite = (id) => {
        let bool = false
        favoriteItems.map(item => {
            if(item.id === id) {
                bool = true
            }
        })
        return bool
    }

    const addToOrders = (arr) => {
        setOrders((prevOrders) => [...prevOrders, arr]);
    };

    const removeOrder = (id)=> {
        setOrders(prev=>
            prev.filter((item) => item.id !== id)
        );
    }

    return (
        <productsContext.Provider
        value={{
            products: products,
            cartItems: cartItems,
            totalPrice: totalPrice,
            orders: orders,
            favoriteItems: favoriteItems,
            getProduct: getProduct,
            addToCart: addToCart,
            setCartItems: setCartItems,
            removeFromCart: removeFromCart,
            checkItemInCart: checkItemInCart,
            addToFavorite: addToFavorite,
            removeFromFavorite: removeFromFavorite,
            checkItemInFavorite: checkItemInFavorite,
            addToOrders: addToOrders,
            setTotalPrice: setTotalPrice,
            removeOrder: removeOrder
        }}
        >
        {children}
        </productsContext.Provider>
    );
};

export { Provider as ProductsProvider, productsContext };
