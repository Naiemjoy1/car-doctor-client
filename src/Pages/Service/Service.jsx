import { useEffect, useState } from "react";
import ServiceCrad from "./ServiceCrad";
import useServices from "../../Hooks/useServices";

const Service = () => {
  // const [services, setService] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/service")
  //     .then((res) => res.json())
  //     .then((data) => setService(data));
  // });

  const services = useServices();

  return (
    <div className=" my-10">
      <div className="mx-auto text-center w-3/5 space-y-5">
        <h2 className=" text-primary font-semibold text-2xl">Service</h2>
        <h2 className=" text-5xl font-bold">Our Service Area</h2>
        <h2>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </h2>
      </div>
      <div className=" grid grid-cols-3 gap-4 my-10">
        {services.map((service) => (
          <ServiceCrad key={service._id} service={service}></ServiceCrad>
        ))}
      </div>
    </div>
  );
};

export default Service;
