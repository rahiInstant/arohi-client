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
      lg:left-0 lg:bg-transparent lg:p-0`}
    >
      {routes.map((route, id) => {
        return (
          <NavLink key={id} to={route.path}>
            <p  className="lg:mr-6 hover:bg-slate-100 hover:lg:bg-slate-200 px-3 py-1 rounded-sm text-base font-bold">
              {route.name}
            </p>
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
