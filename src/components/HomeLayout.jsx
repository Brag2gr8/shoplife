import { Outlet } from "react-router-dom"
import Header from "./header/Header"

const HomeLayout = () => {
    return (
        <>
            <Header />
            <div className="outlet-container">
                <Outlet />
            </div>
        </>
    )
}

export default HomeLayout