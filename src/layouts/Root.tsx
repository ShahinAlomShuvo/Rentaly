import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="font-body">
      <Outlet />
    </div>
  );
};

export default Root;
