import { featuredData } from "../../utils/homeUtils"
import ProductCard from "../productCard/ProductCard"
import "./Featured.css"

const Featured = () => {

    const productJsx = featuredData.map(product => {
        const {id, title, category, price, image, rating} = product

        return (
            <ProductCard
                key={id}
                id={id}
                name={title}
                image={image}
                cat={category}
                price={price}
                rate={rating.rate}
                review={rating.count}
                item={product}
            />
        )
    })  

    return (
        <section className="featured">
            <div className="featured-text">
                <h2>Featured Products</h2>
                <p>Discover the finest selection of products at ShopLife, where quality meets affordability. We take pride in curating a collection of featured products that are sure to delight our customers</p>
            </div>
            <div className="products-container">
                {productJsx}
            </div>
        </section>
    )
}

export default Featured