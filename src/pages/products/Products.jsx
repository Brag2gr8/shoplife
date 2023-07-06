import Category from "../../components/category/Category";
import { featuredData } from "../../utils/homeUtils";
import ProductCard from "../../components/productCard/ProductCard";
import "./Products.css";
import { useContext, useState, useEffect } from "react";
import { productsContext } from "../../context/productsContext";

const Products = () => {
    const { products } = useContext(productsContext);

  const productJsx = products.map((product) => {
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
    <>
      <section className="category">
        <Category />
      </section>
      <section className="products">
        <div className="product-header">
          <h5>Showing all 20 results</h5>
          <div className="product-filter">
            <span>Women</span>
            <span>Men</span>
            <span>Electronics</span>
            <span>Jewelries</span>
            <button>Clear Filter</button>
          </div>
        </div>
        <div className="products-container">{productJsx}</div>
      </section>
    </>
  );
};

export default Products;
