import fakestore from "../../assets/fakestore.png"
import "./Footer.css"
import { logout } from "../../utils/firebaseUtils";
import { useNavigate } from "react-router";


const Footer = () => {
    const navigate = useNavigate()

    async function handleLogout() {
        await logout();
        navigate("/login?message=You have successfully logged out")
        closeModal();
    }

    return (
        <footer>
            <button 
                onClick={() => handleLogout()}
                className="logout-btn"
            >
                Logout
            </button>
            <a href="https://fakestoreapi.com/" target="_blank">
                <img className="fakestore-logo" src={fakestore} alt="fakestore logo" />
            </a>
            <div className="social-icons-container">
                <a href="http://twitter.com/bragthefirst" target="_blank">
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="http://linkedin.com/in/brag2" target="_blank">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="http://github.com/brag2gr8" target="_blank">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="http://mailto:brag2gr8@gmail.com" target="_blank">
                    <i className="fa-solid fa-envelope"></i>
                </a>
            </div>
            <small>© 2023 Shoplife. All rights reserved.</small>
            <p>Made with ❤️ by <a  className="theDev" href="http://linkedin.com/in/brag2" target="_blank">
                Emmanuel Ogbuzuru
            </a></p>
        </footer>
    )
}
export default Footer 