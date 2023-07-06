import Rating from 'react-rating-stars-component'
import { productsContext } from '../../context/productsContext';
import "./ProductCard.css"
import { useContext } from 'react';

const ProductCard = ({id, name, image, cat, price, rate,review}) => {
    const {add, check, remove} = useContext(productsContext)
    const ratingChanged = (newRating) => {
        console.log(newRating);
    }

    const noOfProductInCart = check(id)

    return (
        <div className="product-card">
            <div className='product-card-img-container'>
                <img src={image} alt="Product Image" />
                <span>sales</span>
            </div>
            <div className='product-card-detail'>
                <hr/>
                <h3>{cat[0].toUpperCase() + cat.slice(1)}</h3>
                <p>{name}</p>
                <h4 className='product-card-price'>
                    <p><del>$ {price * 2}</del></p>
                    $ {price}
                </h4>
            </div>
            <div className="product-card-rating-favorite">
                <div className="product-card-rating">
                    <Rating
                        value={rate}
                        size={15}
                        activeColor="orange"
                        isHalf={true}
                        onChange={ratingChanged}
                    />
                    <span>{rate} ({review})</span>
                </div>
                <i className="fa-regular fa-heart"></i>
            </div>
            <div className='product-card-sales'>
                <i className="fa-solid fa-cart-shopping"></i>
                <p>154 Sales</p>
            </div>
            <div className='product-card-cart-btns'>
                {noOfProductInCart && <i className="fa-solid fa-minus" onClick={() => remove(id)}></i>}
                { noOfProductInCart ? 
                    <button>{noOfProductInCart}</button> : 
                    <button onClick={() => add(id)}>Add To Cart</button>
                }
                {noOfProductInCart && <i className="fa-solid fa-plus" onClick={() => add(id)}></i>}
            </div>
        </div>
    );
};

export default ProductCard