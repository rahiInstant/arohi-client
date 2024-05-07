import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "./auth/AuthContext";
import "./sign.css";
const Login = () => {
  const location = useLocation();
  const { signInUser, googleSignIn } = useContext(AuthContext);
  const successMsg = (msg) => toast.success(msg);
  const errorMsg = (msg) => toast.error(msg);
  const [helmet, setHelmet] = useState("Arohi | Log in");
  const navigate = useNavigate();

  //   Manually SignIn with email and password
  function handleSignIn(e) {
    e.preventDefault();
    const email = e.target.mail.value;
    const password = e.target.pass.value;

    signInUser(email, password)
      .then(() => {
        successMsg("Sign in successfully. Redirecting...");
        setHelmet("Redirecting...");
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 2000);
      })
      .catch((error) => {
        errorMsg(error.message);
      });

    console.log(email, password);
  }

  function handleGoogleSignIn() {
    googleSignIn()
      .then(() => {
        successMsg("Sign in successfully. Redirecting...");
        setHelmet("Redirecting...");
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 2000);
      })
      .catch((error) => {
        const Msg = error.message;
        const actualMsg = Msg.slice(Msg.indexOf("/") + 1, Msg.indexOf(")"));
        errorMsg(actualMsg);
      });
  }

  return (
    <div>
      <Helmet>
        <title>{helmet}</title>
      </Helmet>
      <div className="w-full  flex justify-center items-center my-24">
        <div className=" border-4 w-full sm:w-[500px] lg:w-[800px] mx-5 rounded-xl px-5 lg:px-10 py-8 ">
          <h1 className="text-[35px] text-center font-semibold dark:text-slate-300">
            Login your account
          </h1>
          <hr className="my-12" />
          <form className="" onSubmit={handleSignIn}>
            <label className="block text-xl font-semibold mb-3 dark:text-slate-400" htmlFor="mail">
              Email address
            </label>
            <input
              required
              type="email"
              name="mail"
              id="mail"
              placeholder="mr.rahi@gmail.com"
              className="outline-none p-3 bg-[#F3F3F3] rounded-md w-full text-black"
            />
            <label
              className="block text-xl font-semibold mt-6 mb-3 dark:text-slate-400"
              htmlFor="mail"
            >
              Password
            </label>
            <input
              required
              type="password"
              placeholder="r/A*h-i"
              name="pass"
              id="pass"
              className="outline-none text-black p-3 bg-[#F3F3F3] rounded-md w-full"
            />
            <button
              type="submit"
              className="text-xl font-semibold block text-white p-3 bg-[#cacaca] mt-7 rounded-md w-full  bg-gradient-to-r from-[#791d91]   via-[#cc0579]  to-[#cc2305] "
            >
              Login
            </button>
            <div className="flex gap-3">
              <div
                onClick={handleGoogleSignIn}
                type="submit"
                className="text-xl cursor-pointer flex items-center justify-center gap-3 font-semibold bg-clip-text text-transparent border-2  p-3  mt-4 rounded-md w-full bg-gradient-to-r from-[#791d91]   via-[#cc0579]  to-[#cc2305] "
              >
                <FcGoogle />
                Google
              </div>
              <div
                type="submit"
                className="text-xl cursor-pointer flex items-center bg-clip-text text-transparent border-2 justify-center gap-3 font-semibold   p-3  mt-4 rounded-md w-full bg-gradient-to-r from-[#791d91]   via-[#cc0579]  to-[#cc2305] "
              >
                <FaFacebookF className="text-blue-700" />
                Facebook
              </div>
            </div>
          </form>
          <p className="text-base font-medium mt-7 text-center dark:text-slate-400">
            Dont’t Have An Account ?{" "}
            <Link
              state={location.state}
              to="/signup"
              className="text-[#da4f2d]  font-bold italic"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
