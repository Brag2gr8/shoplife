import Category from "../../components/category/Category";
import ProductCard from "../../components/productCard/ProductCard";
import "./Products.css";
import { useContext } from "react";
import { productsContext } from "../../context/productsContext";
import { Link, useSearchParams } from "react-router-dom";

const Products = () => {
  const { products } = useContext(productsContext);


  const [searchParam, setSearchParam] = useSearchParams("type")
  
  const categoryFilter = searchParam.get("category")

  const displayProduct = categoryFilter 
    ? products.filter(prod => prod.category === categoryFilter) 
    : products

  const productJsx = displayProduct.map((product) => {
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
    <section className="products">
      <div className="product-header">
        <h5>Showing all {displayProduct.length} results</h5>
        <div className="product-filter">
          <Link 
            to="?category=women's clothing"
            className={`fiter-link ${categoryFilter === "women's clothing" ? "selected" : ""}`}
          >
            Women
          </Link>
          <Link 
            to="?category=men's clothing"
            className={`fiter-link ${categoryFilter === "men's clothing" ? "selected" : ""}`}
          >
            Men
          </Link>
          <Link 
            to="?category=electronics"
            className={`fiter-link ${categoryFilter === "electronics" ? "selected" : ""}`}
          >
            Electronics
          </Link>
          <Link 
            to="?category=jewelery"
            className={`fiter-link ${categoryFilter === "jewelery" ? "selected" : ""}`}
          >
            Jewelries
          </Link>
        </div>
          {categoryFilter &&
            <span 
              onClick={() => setSearchParam({})}
              className="clear"
            >
              Clear all Filter
            </span>
          }
      </div>
      <div className="products-container">{productJsx}</div>
    </section>
  );
};

export default Products;
