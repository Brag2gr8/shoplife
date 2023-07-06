import { Outlet } from "react-router-dom"
import Header from "./header/Header"

const HomeLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default HomeLayout