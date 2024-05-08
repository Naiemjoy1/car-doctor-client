import { Link, useLoaderData } from "react-router-dom";
import banner from "../../assets/images/checkout/checkout.png";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { _id, title, img, description, facility, price } = service;

  return (
    <div className="mb-10">
      <div className=" relative mb-10">
        <img className="w-full" src={banner} alt="" />
        <div className="absolute rounded-lg h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className=" text-white space-y-7 pl-24">
            <p className=" text-6xl font-bold">Service Details</p>
          </div>
        </div>
        <div className="absolute bottom-0 w-full pl-10">
          <div className="text-sm breadcrumbs text-white">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Documents</a>
              </li>
              <li>Add Document</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-5">
        <div className="w-4/6 space-y-7 ">
          <img className=" w-full rounded-lg" src={img} alt="" />
          <p className=" text-4xl font-bold">{title}</p>
          <p>{description}</p>
          <div className=" grid grid-cols-2 justify-between gap-4">
            {facility &&
              facility.map((item, index) => (
                <div
                  key={index}
                  className="w-full border-t-4 bg-[#f3f3f3] rounded-lg p-10 border-t-primary"
                >
                  <p className="font-semibold text-xl">{item.name}</p>
                  <p>{item.details}</p>
                </div>
              ))}
          </div>
          <p>{description}</p>
          <p className="text-4xl font-bold">3 Simple Steps to Process</p>
          <p>{description}</p>

          <div className="grid grid-cols-3 gap-4">
            <div className=" border-t-4 rounded-lg shadow-lg p-9 text-center space-y-4 ">
              <button className="btn btn-circle w-16 h-16 text-xl font-semibold bg-primary text-white border-8 border-red-100">
                01
              </button>
              <p className=" font-semibold text-xl">Step One</p>
              <p>It uses a dictionary of over 200 .</p>
            </div>
            <div className=" border-t-4 rounded-lg shadow-lg p-9 text-center space-y-4">
              <button className="btn btn-circle w-16 h-16 text-xl font-semibold bg-primary text-white border-8 border-red-100">
                02
              </button>
              <p className=" font-semibold text-xl">Step Two</p>
              <p>It uses a dictionary of over 200 .</p>
            </div>
            <div className=" border-t-4 rounded-lg shadow-lg p-9 text-center space-y-4">
              <button className="btn btn-circle w-16 h-16 text-xl font-semibold bg-primary text-white border-8 border-red-100">
                03
              </button>
              <p className=" font-semibold text-xl">Step Three</p>
              <p>It uses a dictionary of over 200 .</p>
            </div>
          </div>
          <img className=" w-full rounded-lg" src={img} alt="" />
        </div>

        {/* right side  */}

        <div className="w-2/6 space-y-4 ">
          <div className="p-10 bg-[#f3f3f3] rounded-lg">
            <h2 className=" font-bold text-2xl">Services</h2>
          </div>
          <div className="p-10 bg-[#f3f3f3] rounded-lg">
            <h3>hhhh</h3>
          </div>
          <div>
            <p>hmmmmm</p>
          </div>
          <p>Price: ${price}</p>
          <Link
            to={`/checkout/${_id}`}
            className="btn btn-primary text-white w-full"
          >
            Proceed Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
