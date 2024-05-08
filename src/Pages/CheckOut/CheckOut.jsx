import { useLoaderData } from "react-router-dom";
import banner from "../../assets/images/checkout/checkout.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { _id, title, img, description, facility, price } = service;
  const { user } = useContext(AuthContext);

  const handleBookService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
      customerName: name,
      img,
      email,
      date,
      service: title,
      price: price,
    };
    console.log(booking);

    fetch("http://localhost:3000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.inserteId) {
          alert("service book successfully");
        }
      });
  };

  return (
    <div>
      <div className=" relative mb-10">
        <img className="w-full" src={banner} alt="" />
        <div className="absolute rounded-lg h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className=" text-white space-y-7 pl-24">
            <p className=" text-6xl font-bold">Check Out</p>
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
      <div>
        <p className="text-center text-primary text-2xl font-bold">
          Book Service: {title}
        </p>
        <form onSubmit={handleBookService} className="card-body space-y-4">
          <div className="flex gap-4">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered"
                name="name"
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                placeholder="Date"
                className="input input-bordered"
                name="date"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="Due Amount"
                readOnly
                className="input input-bordered"
                defaultValue={"$" + price}
                name="price"
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                readOnly
                placeholder="Your email"
                className="input input-bordered"
                name="email"
              />
            </div>
          </div>
          {/* <div className="flex">
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Bio"
            ></textarea>
          </div> */}
          <div className="form-control mt-6">
            <button className="btn btn-primary text-white">
              Order Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
