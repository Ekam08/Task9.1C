import './Head.css';
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <div>
            <Link to="/login">Login</Link>
            <Link to="/post">Post</Link>
        </div>
    )
}

export default NavBar;