import { Outlet } from "react-router-dom"
import Header from "./header/Header"
import Footer from "./footer/Footer"

const HomeLayout = () => {
    return (
        <>
            <Header />
            <main className="outlet-container">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default HomeLayout