import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../Button/MyButton";
import {AuthContext} from "../../../context/context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const exit = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }
    return (
        <div className='navbar'>
            {isAuth
                ? <MyButton onClick={exit}>Exit</MyButton>
                : ''
            }
            <div className="navbar__links">
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>
            </div>
        </div>
    );
};

export default Navbar;