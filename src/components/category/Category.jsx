import "./Category.css"
import { CategoryData } from "../../utils/homeUtils"
import { Link } from "react-router-dom"

const Categories = () => {

    const categoriesJsx = CategoryData.map(({id, image, link, type}) => {
        return (
            <div key={id} className="category-container">
                <img src={image} alt={image} className="category-img"/>
                <Link to={`/products?category=${link}`}>{type}</Link>
            </div>
        )
    })

    return (
        <section className="category">
            <div className="category-text">
                <h2>EDITOR'S PICK</h2>
                <p>Problems trying to resolve the conflict between </p>
            </div>
            <div  className="categories">
                {categoriesJsx}
            </div>
        </section>
    )
}

export default Categories