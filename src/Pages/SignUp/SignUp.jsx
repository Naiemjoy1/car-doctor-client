import { FaFacebookF } from "react-icons/fa6";
import person from "../../assets/images/login/login.svg";
import { BiLogoLinkedin } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { RiGoogleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className=" flex justify-center items-center gap-10 my-10">
      <div className="w-1/2 border border-dashed">
        <img className=" mx-auto" src={person} alt="" />
      </div>
      <div className="w-1/2 border rounded-lg p-16">
        <h1 className=" text-center font-bold text-2xl">Sign Up</h1>
        <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered"
              name="name"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              name="email"
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
            <button className="btn btn-primary text-white">Sign Up</button>
          </div>
        </form>
        <div className="text-center">
          <p className="mt-5">Or Sign Up with</p>
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
            Already have an account?
            <Link to="/login" className=" text-primary font-semibold">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
