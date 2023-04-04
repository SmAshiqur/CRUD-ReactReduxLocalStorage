import React from "react";
import PostForm from "./PostForm";
import PostList from "./PostList";

function Post() {
  return (
    <div className="container mx-auto bg-gray-100 ">
      <PostForm />
      <PostList />
    </div>
  );
}

export default Post;
