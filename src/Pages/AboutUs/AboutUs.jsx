import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center gap-10 my-10">
      <div className=" w-full relative">
        <img className="w-3/4 rounded-lg shadow-2xl" src={person} alt="" />
        <img
          className="w-1/2 absolute right-5 top-1/2 border-8 border-gray-400 rounded-lg shadow-2xl"
          src={parts}
          alt=""
        />
      </div>
      <div className=" w-full space-y-7">
        <h2 className=" text-primary font-semibold text-xl">About Us</h2>
        <h2 className=" font-bold text-5xl w-3/5">
          We are qualified & of experience in this field
        </h2>
        <h2 className="w-4/5">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </h2>
        <h2 className="w-4/5">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </h2>
        <button className=" btn btn-primary text-white">Get More Info</button>
      </div>
    </div>
  );
};

export default AboutUs;
