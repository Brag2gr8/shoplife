import ProductCard from "../../components/productCard/ProductCard";
import "./Favorite.css";
import { useContext } from "react";
import { productsContext } from "../../context/productsContext";
import { Link } from "react-router-dom";

const Favorite = () => {
  const { favoriteItems } = useContext(productsContext);

  const favoriteJsx = favoriteItems.map((product) => {
    const { id, title, category, price, image, rating } = product;

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
      />
    );
  });

  return (
    <section className="favorite">
        <h2>Favorite Items</h2>
        {favoriteItems.length > 0 ? 
            <div className="items-container">
                {favoriteJsx}
            </div> 
            :
            <div className="no-favorite">
                <h1>You Don't have any favorite items</h1>
                <button><Link to="/products">Go To Products</Link></button>
            </div>
        }
    </section>
  );
};

export default Favorite;
