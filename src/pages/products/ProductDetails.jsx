import { useParams } from "react-router-dom"
import "./Products.css"
import { useContext, useEffect, useRef, useState } from "react"
import { productsContext } from "../../context/productsContext"
import Rating from 'react-rating-stars-component'

const ProductDetails = () => {
    const {productId} = useParams()
    const id = parseFloat(productId)
    const {
        getProduct,
        addToCart, 
        checkItemInCart, 
        removeFromCart,
        addToFavorite,
        removeFromFavorite,
        checkItemInFavorite,
    } = useContext(productsContext)
    
    const product = getProduct(id)
    console.log(product)
    
    const isfavorite = checkItemInFavorite(id)
    const ratingChanged = (newRating) => {
        console.log(newRating)
    }

    const noOfProductInCart = checkItemInCart(id)

    const favoriteIcon = isfavorite ?
        <i className="fa-solid fa-heart" onClick={() => removeFromFavorite(id)}></i> :
        <i className="fa-regular fa-heart" onClick={() => addToFavorite(id)}></i> 

    const rate = product.rating ? product.rating.rate : null
    const count = product.rating ? product.rating.count : null
    console.log(rate)

    return (
        <section className="product-details">
            <img src={product.image} alt={product.title}/>
            <div className="product-details-objects">
                <span className="new">New</span>
                <div className="product-details-name">
                    <h1>{product.title}</h1>
                    {favoriteIcon}
                </div>
                <div className="product-details-category">
                    <h3>{product.category}</h3>
                    <span>${product.price}</span>
                </div>
                <div className="product-details-rating">
                    <Rating
                        value={rate}
                        size={20}
                        activeColor="orange"
                        isHalf={true}
                    />
                    <p>Reviews({count})</p>
                </div>
                <div className="product-details-desc">
                    <h4>Description</h4>
                    <p>{product.description}</p>
                </div>
            <div className='product-details-cta'>
                    {noOfProductInCart && 
                        <i 
                            className="fa-solid fa-minus" 
                            onClick={() => removeFromCart(id)}
                        >
                        </i>
                    }
                    { noOfProductInCart ? 
                        <button>{noOfProductInCart}</button> : 
                        <button 
                            onClick={() => addToCart(id)}
                        >
                            Add To Cart
                        </button>
                    }
                    {noOfProductInCart && 
                        <i className="fa-solid fa-plus" onClick={() => addToCart(id)}
                        ></i>
                    }
                </div>
           </div>
        </section>
    )
}

export default ProductDetails