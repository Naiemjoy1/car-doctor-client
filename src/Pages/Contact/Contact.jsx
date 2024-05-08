import { FaMapLocationDot } from "react-icons/fa6";
import { LiaBusinessTimeSolid, LiaPhoneVolumeSolid } from "react-icons/lia";

const Contact = () => {
  return (
    <div className=" my-10 bg-neutral rounded-lg py-24 px-16 text-white flex items-center justify-between">
      <div className="flex items-center gap-4">
        <p className=" text-4xl text-primary">
          <LiaBusinessTimeSolid />
        </p>
        <div>
          <p>We are open monday-friday</p>
          <p className=" text-2xl font-semibold">7:00 am - 9:00 pm</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p className=" text-4xl text-primary">
          <LiaPhoneVolumeSolid />
        </p>
        <div>
          <p>Have a question?</p>
          <p className=" text-2xl font-semibold">+2546 251 2658</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p className=" text-4xl text-primary">
          <FaMapLocationDot />
        </p>
        <div>
          <p>Need a repair? our address</p>
          <p className=" text-2xl font-semibold">Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
