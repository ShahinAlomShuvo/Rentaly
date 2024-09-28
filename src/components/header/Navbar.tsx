import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from "../container/Container";
import lightLogo from "../../assets/logos/logo-light.png";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = ["Home", "About Us", "Booking", "Contact"];
  const navLinks = navItems.map((item) => {
    const path =
      item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`;
    return (
      <li className="relative group" key={item}>
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

  // Handle scroll behavior
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsNavbarVisible(false);
      } else if (window.scrollY < lastScrollY) {
        setIsNavbarVisible(true);
      }

      // Set background color when scrolled past a certain point
      setIsScrolled(window.scrollY > 50);

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={`transition-all duration-500 ease-in-out ${
        isNavbarVisible
          ? `fixed top-0 left-0 right-0 z-50 ${
              isScrolled ? "bg-black" : "bg-transparent"
            } opacity-100 translate-y-0`
          : "fixed top-0 left-0 right-0 z-50 opacity-0 -translate-y-full"
      }`}
    >
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
          <div className="md:hidden">
            <ul className="flex flex-col items-center gap-4 py-4">
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
