import Hero from "../../components/hero/Hero"
import Header from "../../components/header/Header"
import Category from "../../components/category/Category"
import ProductCard from "../../components/productCard/ProductCard"

const Home = () => {

    return (
        <>
            <Header />
            <Hero />
            <Category />
            <ProductCard />
        </>
    )
}

export default Home