import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import NavMiddle from "./NavMiddle";

const Navbar = () => {
  const [open, setOPen] = useState(false);
  const routes = [
    { path: "/", name: "Home", id: 1 },
    { path: "/all-spot", name: "All Spot", id: 2 },
    { path: "/add-spot", name: "Add Spot", id: 3 },
    { path: "/my-list", name: "My List", id: 4 },

  ];

  return (
    <div>
      <nav className="p-6 flex justify-between items-center ">
        <div className="flex items-center gap-1">
          <div onClick={() => setOPen(!open)} className="text-2xl lg:hidden">
            {open ? <RxCross2 /> : <HiMenuAlt1 />}
          </div>
          <div className="text-3xl font-extrabold">boiPoka</div>
        </div>
        <NavMiddle routes={routes} open={open}></NavMiddle>
      </nav>
    </div>
  );
};

export default Navbar;
