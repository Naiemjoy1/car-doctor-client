import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setService] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/service")
      .then((res) => res.json())
      .then((data) => setService(data));
  });
  return services;
};

export default useServices;
