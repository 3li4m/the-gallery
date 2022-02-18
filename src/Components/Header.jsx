import React, {useState} from "react";
import { NavLink} from "react-router-dom"
import turnOffBodyScrolling from "./turnOffbodyScroll"
function Header(){
    const  [toggleHamburger, setHamburgerToggle] = useState(false);
    
    const hamburgerClick = () => {
        // setHamburgerToggle(!toggle);
        toggleHamburger ? setHamburgerToggle(false) : setHamburgerToggle(true);
    }

    return (
        <header>
                {turnOffBodyScrolling(toggleHamburger)}

                <nav className="desktopNav">
                    <div className="navContainer">
                        <h1>The Gallery</h1>
                        <div className="navMenu">
                            <NavLink to="/the-gallery/" activeClassName="active">Home</NavLink>
                            <NavLink to="/the-gallery/about" activeClassName="active">About</NavLink>
                        </div>
                        <div>
                            <button className={toggleHamburger ? "navHamburger is-Active" : "navHamburger"} onClick={hamburgerClick}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </nav>
                <nav className={toggleHamburger ? "mobileNav isActive" : "mobileNav"}>
                    <NavLink to="/the-gallery/" activeClassName="active" onClick={hamburgerClick}>Home</NavLink>
                    <NavLink to="/the-gallery/about" activeClassName="active" onClick={hamburgerClick}>About</NavLink>
                </nav> 
        </header>
        
        
    );
    
}
export default Header;
    




