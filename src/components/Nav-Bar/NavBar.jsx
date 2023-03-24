import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoCorona } from "../../assets/crown.svg";
import { UserContext } from "../../Context/UserContext";
import { signOutUser } from "../../Utils/Fire-Base";
import CartDown from "../CartDropDown/CartDropDown";
import CardIcon from "../CartIcon/CardIcon";
import "./NavBar.css"

const NavBar = () => {

    const [isDropDown, setIsDropDown] = useState(false)

    const {
        currentUser,
        setCurrentUser
    } = useContext(UserContext);

    const logOut = async () => {
        await signOutUser()
        setCurrentUser(null)
    }

    const toggleDropDown = () => {
        // console.log("click");
        setIsDropDown(!isDropDown)
    }


    return (
        <div className="navigation">
            <Link className="logo-container" to="/">
                <LogoCorona />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/shop">
                    SHOP
                </Link>
                {currentUser === null ?
                    (<Link className="nav-link" to="/SignIn">
                        SIGN IN
                    </Link>) :
                    (<span className="nav-link" onClick={logOut} >
                        LOG OUT
                    </span>)}
                <CardIcon onclickIcon={toggleDropDown}/>
            
            </div>

            {
                isDropDown === true && <CartDown />
            }
        </div>
    )
};

export default NavBar