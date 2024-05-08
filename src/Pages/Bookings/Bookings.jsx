import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingsRow from "./BookingsRow";
import banner from "../../assets/images/checkout/checkout.png";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:3000/bookings?email=${user?.email}`;

  useEffect(() => {
    axios
      .get(url, {
        withCredentials: true,
      })
      .then((res) => {
        setBookings(res.data);
      });
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure?");
    if (proceed) {
      fetch(`http://localhost:3000/bookings/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "applicaion/json",
        },
        body: JSON.stringify({ status: "confirm" }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        })
        .catch((error) => {
          console.error("Error deleting booking:", error);
          alert("An error occurred while deleting the booking.");
        });
    }
  };

  const handleBookingConfirm = (id) => {
    fetch(`http://localhost:3000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "applicaion/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "confirm";
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };

  return (
    <div className="min-h-[calc(100vh-327px)]">
      <div className=" relative mb-10">
        <img className="w-full" src={banner} alt="" />
        <div className="absolute rounded-lg h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className=" text-white space-y-7 pl-24">
            <p className=" text-6xl font-bold">Cart Details</p>
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
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  {/* <input type="checkbox" className="checkbox" /> */}
                </label>
              </th>
              <th></th>
              <th>Service name</th>
              <th>Email</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingsRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              ></BookingsRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
