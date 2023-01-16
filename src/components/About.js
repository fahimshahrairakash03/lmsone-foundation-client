import React from "react";

const About = () => {
  return (
    <div className="sm:px-10 lg:px-20 ">
      <p className="text-center text-5xl font-bold">About Us</p>
      <div className="lg:flex  align-center ">
        <div className="lg:w-1/2 mx-auto">
          <img
            style={{ width: "100%" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRC83CwrKd-Wv4U9K7xAoHMZYE6frt3dIOQ&usqp=CAU"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 ">
          <p className="text-lg lg:mt-52 lg:text-justify font-medium">
            We believe the involvement of youth will facilitate stronger
            communities and future leaders. The main purpose of our Youth
            Development Program is to support and empower youth with capacity
            development, networking, and social campaign for development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
