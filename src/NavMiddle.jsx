import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import './NavMiddle.css'
const NavMiddle = ({ routes, open }) => {
  return (
    <div
      className={`lg:flex w-[200px] lg:w-auto
      ${open ? "left-6" : "-left-52"} 
      duration-500 md:font-medium absolute lg:static 
      top-20 bg-slate-200 p-4 rounded-md lg:rounded-none 
      lg:left-0 gap-6 lg:bg-transparent lg:p-0 z-10`}
    >
      {routes.map((route, id) => {
        return (
          <NavLink id="link" className="" key={id} to={route.path}>
            <div id="link-text" className=" text-center dark:text-orange-500 text-black  py-1 rounded-sm text-base font-bold">
              {route.name}
            </div>
            <div id="underline" className=" h-1 w-[0%] hidden lg:block"></div>
          </NavLink>
        );
      })}
    </div>
  );
};

NavMiddle.propTypes = {
  routes: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequired,
};

export default NavMiddle;
