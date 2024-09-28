import { NavLink } from "react-router-dom";
import Container from "../container/Container";
import lightLogo from "../../assets/logos/logo-light.png";
import { Button } from "../ui/button";

const Navbar = () => {
  const navItems = ["Home", "About Us", "Booking", "Contact"];
  const navLinks = navItems.map((item) => {
    const path =
      item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`;
    return (
      <li className=" relative group" key={item}>
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
    <div className=" bg-slate-500">
      <Container>
        <div className="flex items-center justify-between py-4 font-title">
          <img src={lightLogo} alt="Rentaly Logo" />
          <ul className="flex items-center gap-8">{navLinks}</ul>
          <Button className="bg-primaryColor hover:shadow-primaryShadow hover:bg-primaryColor font-semibold">
            Sign In
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
