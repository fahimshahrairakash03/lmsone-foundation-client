import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  });
  return (
    <div className="my-20">
      <p className="my-10 text-6xl font-bold">ALL POSTS</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {posts.map((post) => (
          <div className="sm:mx-auto" key={post.id}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="text-2xl font-bold text-center">
                  {post.title.slice(0, 15)} . . .
                </h2>
                <p>{post.body.slice(0, 30)} . . .</p>
                <Link to={`/post/${post.id}`}>
                  <div className="card-actions justify-center">
                    <button className="btn btn-accent text-white font-bold">
                      Details
                    </button>
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
