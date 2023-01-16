import React from "react";
import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { title, body } = post;
  return (
    <div>
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage: `url("https://www.jaago.com.bd/wp-content/uploads/2021/11/146521368_1556087347923835_8547795676395981415_n.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-10 text-5xl font-bold">{title}</h1>
            <p className="mb-5 text-lg font-medium">{body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
