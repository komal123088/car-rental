import "../styles/navbar.css";
import { FaSearch, FaHeart, FaBell, FaCog } from "react-icons/fa";
import profileImg from "../assets/image/user.png";
import { PiSlidersHorizontalBold } from "react-icons/pi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="topbar">
      <div className="topbar-left">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h2 className="logo">CarRent</h2>
        </Link>
      </div>

      <div className="topbar-center">
        <div className="search-bar">
          <FaSearch />
          <input type="text" placeholder="Search car, category, etc..." />
          <PiSlidersHorizontalBold />
        </div>
      </div>

      <div className="topbar-right">
        <FaHeart className="icon" />
        <FaBell className="icon" />
        <FaCog className="icon" />
        <Link to="/dashboard">
          <img src={profileImg} className="profile-img" alt="Profile" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
