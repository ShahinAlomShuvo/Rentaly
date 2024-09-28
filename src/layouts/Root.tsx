import Navbar from "@/components/header/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="font-body">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
