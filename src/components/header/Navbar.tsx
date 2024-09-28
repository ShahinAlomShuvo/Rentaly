import { NavLink } from "react-router-dom";
import { useState } from "react";
import Container from "../container/Container";
import lightLogo from "../../assets/logos/logo-light.png";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ["Home", "About Us", "Booking", "Contact"];
  const navLinks = navItems.map((item) => {
    const path =
      item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`;
    return (
      <li
        className={`relative group ${
          isMobileMenuOpen
            ? "border-b w-full text-center border-primaryColor"
            : ""
        }`}
        key={item}
      >
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-primaryColor"
              : "text-white hover:text-primaryColor transition-colors duration-300"
          }
          to={path}
        >
          {item}
          <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primaryColor group-hover:w-full transition-all duration-300"></span>
        </NavLink>
      </li>
    );
  });

  return (
    <div className="bg-slate-500">
      <Container>
        <div className="flex items-center justify-between py-4 font-title">
          {/* Logo */}
          <img src={lightLogo} alt="Rentaly Logo" />

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">{navLinks}</ul>

          {/* Sign In Button */}
          <Button className="hidden md:block bg-primaryColor hover:shadow-primary hover:bg-primaryColor font-semibold">
            Sign In
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col items-center gap-4 py-4 ">
              {navLinks}
            </ul>
            <Button className="bg-primaryColor hover:shadow-primary hover:bg-primaryColor font-semibold w-full">
              Sign In
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Navbar;
