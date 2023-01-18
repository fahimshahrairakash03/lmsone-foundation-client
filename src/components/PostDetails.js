import React from "react";
import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const user = useLoaderData();
  const {
    firstName,
    lastName,
    maidenName,
    image,
    address,
    birthDate,
    gender,
    phone,
  } = user;
  return (
    <div className="p-24 ">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold">
            {firstName} {lastName} {maidenName}
          </h2>
          <p>Address: {address.address}</p>
          <p>Birthdate: {birthDate}</p>
          <p>Gender: {gender}</p>
          <p>Phone Number: {phone}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
