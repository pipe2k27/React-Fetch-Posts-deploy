import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./css/Posts.css";

function Posts() {
  const [posts, postUpdater] = useState({ posts: [], images: [] });
  const [size, sizeUpdater] = useState({ size: 5 });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        fetch("https://picsum.photos/v2/list?page=2&limit=100#")
          .then((res) => res.json())
          .then((pictures) => {
            postUpdater({ posts: posts, images: pictures });
          });
      });
  });

  const handleClick = () => {
    let newSize = size.size + 5;
    sizeUpdater({ size: newSize });
  };

  function mapper(e, index) {
    return (
      <Card
        body={e.body}
        title={e.title}
        id={e.id}
        key={e.id}
        picture={posts.images[index]}
      />
    );
  }

  return (
    <div>
      <h1>Latest Posts</h1>
      <div className="card-holder">
        {posts.posts.slice(0, size.size).map(mapper)}
      </div>
      <div className="loader-box">
        <a onClick={handleClick} className="loader">
          Load More Posts
        </a>
      </div>
    </div>
  );
}

export default Posts;
