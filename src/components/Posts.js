import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  });
  console.log(users);
  return (
    <div className="my-20">
      <p className="my-10 text-6xl font-bold">ALL USERS</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {users.map((user) => (
          <div className="sm:mx-auto" key={user.id}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={user.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="text-2xl font-bold">
                  {user.firstName} {user.lastName}
                </h2>
                <p>Address: {user.address.address}</p>
                <Link to={`/user/${user.id}`}>
                  <div className="card-actions justify-end">
                    <button className="btn btn-accent mx-auto"> Details</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
