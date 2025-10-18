import Heading from "./Heading";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import "./Head.css";

function Header() {
    return (
        <div className="head">
            <Heading heading="DEV@Deakin"></Heading>
            <SearchBar></SearchBar>
            <NavBar></NavBar>
        </div>
    )
}

export default Header;