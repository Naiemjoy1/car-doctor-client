import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCrad = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div>
      <div className="card border">
        <figure className="px-5 pt-5">
          <img src={img} alt="Shoes" className="rounded-xl h-56 w-full" />
        </figure>
        <div className="p-5 space-y-4 ">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between items-center text-primary">
            <p>Price: {price}</p>
            <Link to={`/details/${_id}`}>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCrad;
