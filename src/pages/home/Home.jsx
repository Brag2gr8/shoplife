import Hero from "../../components/hero/Hero"
import Header from "../../components/header/Header"
import Category from "../../components/category/Category"
import ProductCard from "../../components/productCard/ProductCard"
import Featured from "../../components/featured/Featured"

const Home = () => {

    return (
        <>
            <Hero />
            <Category />
            <Featured />
        </>
    )
}

export default Home