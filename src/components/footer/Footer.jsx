import fakestore from "../../assets/fakestore.png";
import "./Footer.css";
import { logout, getCurrentUser } from "../../utils/firebaseUtils";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Footer = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const currentUser = await getCurrentUser();
                setUser(currentUser);
            } catch (error) {
                console.error("Error fetching current user:", error);
            }
        };

        fetchCurrentUser();
    }, []);

    async function handleLogout() {
        try {
            await logout();
            navigate("/login?message=You have successfully logged out");
        } catch (error) {
            console.error("Error logging out:", error);
        }
        window.location.reload()
    }

    return (
        <footer>
            {user && (
                <button onClick={() => handleLogout()} className="logout-btn">
                    Logout
                </button>
            )}
            <a href="https://fakestoreapi.com/" target="_blank" rel="noopener noreferrer">
                <img className="fakestore-logo" src={fakestore} alt="fakestore logo" />
            </a>
            <div className="social-icons-container">
                {/* <a href="http://twitter.com/dev_bragg" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-twitter"></i>
                </a> */}
                <a href="http://linkedin.com/in/brag2" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="http://github.com/brag2gr8" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="mailto:brag2gr8@gmail.com?subject=Inquiry&body=Hello%20Emmanuel!" target="_blank" rel="noopener noreferrer">
                    <i className="fa-solid fa-envelope"></i>
                </a>
            </div>
            <small>© 2023 Shoplife. All rights reserved.</small>
            <p>
                Made with ❤️ by{" "}
                <a className="theDev" href="http://linkedin.com/in/brag2" target="_blank" rel="noopener noreferrer">
                    Emmanuel Ogbuzuru
                </a>
            </p>
        </footer>
    );
};

export default Footer;
