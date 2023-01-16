import React from "react";

const Profile = () => {
  return (
    <div className="flex justify-center align-center my-10">
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-6xl font-bold my-10">PROFILE DETAILS</h2>
          <h2 className="card-title">Name: Fahim Shahriar Akash</h2>
          <h2 className="card-title">Email: fahimshahriarakash03@gmail.com</h2>
          <h2 className="card-title">Contact Number: 8801313975079</h2>
          <h2 className="card-title">
            Linkedin: https://www.linkedin.com/in/fahim-shahriar-akash/
          </h2>
          <h2 className="card-title">
            GitHub: https://github.com/fahimshahrairakash03
          </h2>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
