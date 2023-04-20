import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseCount, selectCount } from "../features/posts/postsSlice";
import { Link } from "react-router-dom";

const Header = () => {
    // Redux
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <header className="Header">
            <h1>Redux Blog</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/post">Post</Link></li>
                    <li><Link to="/user">Users</Link></li>
                </ul>
                <button onClick={() => dispatch(increaseCount())}>{count}</button>
            </nav>
        </header>
    )
}

export default Header