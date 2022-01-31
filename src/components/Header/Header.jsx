import "./Header.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} style={{ width: "150px", height: "100px" }} />
      <div>
        <nav className="navigation">
          <a href="#">Destination</a>
          <a href="#">Hotels</a>
          <a href="#">Flights</a>
          <a href="#">Bookings</a>
          <a href="#">Login</a>
          <button>Sign Up</button>
          <select>
            <option value="EN">EN</option>
          </select>
        </nav>
      </div>
    </header>
  );
}

export default Header;
