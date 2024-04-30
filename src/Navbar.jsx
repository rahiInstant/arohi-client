import { useContext, useEffect, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import NavMiddle from "./NavMiddle";
import { FaPersonHiking } from "react-icons/fa6";
import { Link, json } from "react-router-dom";
import { AuthContext } from "./auth/AuthContext";
import toast from "react-hot-toast";
import { MdLightMode } from "react-icons/md";
import { MdNightlightRound } from "react-icons/md";
const Navbar = () => {
  const [open, setOPen] = useState(false);
  const [theme, setTheme] = useState(getItem().theme);
  const { user, LogOut } = useContext(AuthContext);
  const successMsg = (msg) => toast.success(msg);
  const errorMsg = (msg) => toast.error(msg);

  useEffect(() => {
    if (!theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const routes = [
    { path: "/", name: "Home", id: 1 },
    { path: "/all-spot", name: "All Spot", id: 2 },
    { path: "/add-spot", name: "Add Spot", id: 3 },
    { path: "/my-list", name: "My List", id: 4 },
  ];
  function handleLogout() {
    LogOut()
      .then(() => {
        successMsg("Logout successfully!!");
      })
      .catch((error) => {
        errorMsg("failed to logout!!");
        console.log(error);
      });
  }
  function getItem() {
    const themeData = localStorage.getItem("theme");
    if (themeData) {
      return JSON.parse(themeData);
    } else {
      return { theme: true };
    }
  }
  function setItem(value) {
    localStorage.setItem("theme", JSON.stringify({ theme: value }));
  }

  function handleSetTheme() {
    setItem(!getItem().theme);
    setTheme(getItem().theme);
    // console.log(getItem().theme);
  }
  return (
    <div className="select-none">
      <nav className="p-6 flex justify-between items-center ">
        <div className="flex items-center gap-1">
          <div onClick={() => setOPen(!open)} className="text-2xl lg:hidden">
            {open ? <RxCross2 /> : <HiMenuAlt1 />}
          </div>
          <div className="text-3xl font-extrabold flex items-center gap-2 text-emerald-700">
            <FaPersonHiking className="text-orange-600" />
            Arohi
          </div>
        </div>
        <NavMiddle routes={routes} open={open}></NavMiddle>
        <div className="flex gap-4  items-center">
          <div
            onClick={handleSetTheme}
            className="h-8 w-8 flex justify-center items-center text-lg cursor-pointer bg-slate-300 rounded-full"
          >
            {theme ? <MdLightMode /> : <MdNightlightRound />}
          </div>
          {user ? (
            <div className="flex items-center gap-5">
              <div className="">
                <img
                  src={user.photoURL}
                  className="rounded-full border-2 w-12 h-12"
                  alt=""
                />
              </div>
              <div
                onClick={handleLogout}
                className="cursor-pointer dark:text-green-400 dark:hover:text-white text-xl font-medium py-2 px-5  border border-green-700 rounded-lg hover:bg-green-700 duration-200 hover:text-white"
              >
                Log out
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-5">
              <Link to="/login">
                <div className="text-xl dark:text-green-400 dark:hover:text-white font-medium py-2 px-5  border border-green-700 rounded-lg hover:bg-green-700 duration-200 hover:text-white">
                  Log in
                </div>
              </Link>
              <Link to="/signup">
                <div className="text-xl dark:text-green-400 dark:hover:text-white font-medium py-2 px-5  border border-green-700 rounded-lg hover:bg-green-700 duration-200 hover:text-white">
                  Sign up
                </div>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
