import "./Category.css"
import { CategoryData } from "../../utils/homeUtils"

const Categories = () => {

    const categoriesJsx = CategoryData.map(({id, image, type}) => {
        return (
            <div key={id} className="category-container">
                <img src={image} alt={image} className="category-img"/>
                <span>{type}</span>
            </div>
        )
    })

    return (
        <section className="category">
            <div className="category-text">
                <h3>EDITOR'S PICK</h3>
                <p>Problems trying to resolve the conflict between </p>
            </div>
            <div  className="categories">
                {categoriesJsx}
            </div>
        </section>
    )
}

export default Categories