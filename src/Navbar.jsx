import { useContext, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import NavMiddle from "./NavMiddle";
import { FaPersonHiking } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "./auth/AuthContext";
import toast from "react-hot-toast";
const Navbar = () => {
  const [open, setOPen] = useState(false);
  const { user, LogOut } = useContext(AuthContext);
  const successMsg = (msg) => toast.success(msg);
  const errorMsg = (msg) => toast.error(msg);
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

  return (
    <div>
      <nav className="p-6 flex justify-between items-center ">
        <div className="flex items-center gap-1">
          <div onClick={() => setOPen(!open)} className="text-2xl lg:hidden">
            {open ? <RxCross2 /> : <HiMenuAlt1 />}
          </div>
          <div className="text-3xl font-extrabold flex items-center gap-2 text-emerald-700">
            <FaPersonHiking className="text-orange-600"/>
            Arohi
          </div>
        </div>
        <NavMiddle routes={routes} open={open}></NavMiddle>
        {user ? (
          <div  className="flex items-center gap-5">
            <div className="">
              <img src={user.photoURL} className="rounded-full border-2 w-12 h-12"  alt="" />
            </div>
            <div
            onClick={handleLogout}
            className="cursor-pointer text-xl font-medium py-2 px-5  border border-green-700 rounded-lg hover:bg-green-700 duration-200 hover:text-white"
          >
            Log out
          </div>

          </div>
        ) : (
          <div className="flex items-center gap-5">
            <Link to="/login">
              <div className="text-xl font-medium py-2 px-5  border border-green-700 rounded-lg hover:bg-green-700 duration-200 hover:text-white">
                Log in
              </div>
            </Link>
            <Link to="/signup">
              <div className="text-xl font-medium py-2 px-5  border border-green-700 rounded-lg hover:bg-green-700 duration-200 hover:text-white">
                Sign up
              </div>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
