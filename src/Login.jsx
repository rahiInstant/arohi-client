import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "./auth/AuthContext";

const Login = () => {
  const location = useLocation();
  const { signInUser } = useContext(AuthContext);
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

  return (
    <div>
      <Helmet>
        <title>{helmet}</title>
      </Helmet>
      <div className="w-full  flex justify-center items-center">
        <div className="bg-[#858484] px-14 py-11 w-[500px]">
          <h1 className="text-[35px] text-center font-semibold text-white">
            Login your account
          </h1>
          <hr className="my-12" />
          <form className="text-white " onSubmit={handleSignIn}>
            <label className="block text-xl font-semibold mb-3" htmlFor="mail">
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
              className="block text-xl font-semibold mt-6 mb-3"
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
              className="text-xl font-semibold block p-3 bg-[#403F3F] mt-7 rounded-md w-full"
            >
              Login
            </button>
          </form>
          <p className="text-base font-medium text-white mt-7 text-center">
            Dont’t Have An Account ?{" "}
            <Link
              state={location.state}
              to="/signup"
              className="text-[#a02b2e]"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
