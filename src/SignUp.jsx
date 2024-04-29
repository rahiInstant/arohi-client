import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { AuthContext } from "./auth/AuthContext";
import auth from "./auth/firebase.config";

const SignUp = () => {
  const [helmet, setHelmet] = useState("Dragon news | Register");
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const errorMsg = (msg) => toast.error(msg);
  const successMsg = (msg) => toast.success(msg);

  function handleRegisterSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.mail.value;
    const pass = e.target.pass.value;
    const accepted = e.target.term.checked;
    createUser(email, pass)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setHelmet("Redirecting...");
            // setSuccess("Create account successfully. Redirecting...");
            successMsg("Create account successfully. Redirecting...");
            setTimeout(() => {
              navigate(location?.state ? location.state : "/");
            }, 3000);
          })
          .catch((error) => {
            errorMsg(error.message);
          });
      })
      .catch((error) => {
        console.log("error", error.message);
        errorMsg(error.message);
      });

    console.log(name, photo, email, pass, accepted);
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
          <form className="text-white " onSubmit={handleRegisterSubmit}>
            <label className="block text-xl font-semibold mb-3" htmlFor="mail">
              Your Name
            </label>
            <input
              required
              type="text"
              name="name"
              id="name"
              placeholder="Abdur Rahaman Rahi"
              className="outline-none p-3 bg-[#F3F3F3] rounded-md w-full text-black"
            />
            <label
              className="block text-xl font-semibold mb-3 mt-6"
              htmlFor="mail"
            >
              Photo URL
            </label>
            <input
              required
              type="url"
              name="photo"
              id="photo"
              placeholder="https://i.ibb.co/M23fhxm/unsplash-Eh"
              className="outline-none p-3 bg-[#F3F3F3] rounded-md w-full text-black"
            />
            <label
              className="block text-xl font-semibold mb-3 mt-6"
              htmlFor="mail"
            >
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
            <input
              className="mt-5 w-5 h-5 rounded"
              type="checkbox"
              name="term"
              id="term"
            />{" "}
            <label htmlFor="term" className="select-none">
              Accept <span className="font-semibold">Term & Conditions</span>
            </label>
            <button
              type="submit"
              className="text-xl font-semibold block p-3 bg-[#403F3F] mt-7 rounded-md w-full"
            >
              Register
            </button>
          </form>
          <p className="text-base font-medium text-white mt-7 text-center">
            Already have an account ?{" "}
            <Link to="/Login" className="text-[#a02b2e]">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
