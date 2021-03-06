import React, { useEffect, useState } from "react";

import ServiceBanner from "../../Image/Coursebanner.jpg";
import "./Service.css";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./Service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div>
        <img
          src={ServiceBanner}
          height="300px"
          alt=""
          className="image-fluid w-100"
        />
      </div>
      <div className="p-5 row row-cols-1 row-cols-md-3 g-4">
        {services.map((service) => (
          <div className="col" key={service.key}>
            <div className="card h-100 p-3">
              <img
                src={service.img}
                className="img-fluid rounded-start"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-danger">
                  <b>{service.Name}</b>{" "}
                </h5>
                <p className="card-text font-italic">{service.About}</p>
              </div>
              <div className="card-footer">
                <p className="card-text">
                  {" "}
                  <strong>
                    {" "}
                    {service.Duration} <br /> {service.CourseFee}{" "}
                  </strong>
                </p>
              </div>
              <div>
                <button className="btn cart-Button mt-3 me-3 px-3">
                  View Details
                </button>
                <button className="btn cart-Button mt-3 me-3  px-3">
                  Enroll
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
