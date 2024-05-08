import { FaFacebookF } from "react-icons/fa6";
import person from "../../assets/images/login/login.svg";
import { BiLogoLinkedin } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { RiGoogleFill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";

const SignIn = () => {
  // const { signIn } = useContext(AuthContext);
  const { signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, password);

    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const user = { email };
        axios
          .post("http://localhost:3000/jwt", user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              navigate(location?.state ? location?.state : "/");
            }
          });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className=" flex justify-center items-center gap-10 my-10">
      <div className="w-1/2 border border-dashed">
        <img className=" mx-auto" src={person} alt="" />
      </div>
      <div className="w-1/2 border rounded-lg p-16">
        <h1 className=" text-center font-bold text-2xl">Login</h1>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              name="email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className=" relative ">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered w-full"
              />
              <span
                className=" absolute top-4 right-4"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoMdEye /> : <IoIosEyeOff />}
              </span>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary text-white">Login</button>
          </div>
        </form>
        <div className="text-center">
          <p className="mt-5">Or Sign In with</p>
          <div className="flex gap-4 justify-center mt-5">
            <button className="btn btn-circle text-primary text-xl">
              <FaFacebookF />
            </button>
            <button className="btn btn-circle text-primary text-xl">
              <BiLogoLinkedin />
            </button>
            <button className="btn btn-circle text-primary text-xl">
              <RiGoogleFill />
            </button>
          </div>
          <p className="mt-10">
            Have an account?
            <Link to="/signup" className=" text-primary font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
