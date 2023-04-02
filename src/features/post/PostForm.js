import React, { useState } from "react";
import "./Post.module.css";
import { useDispatch } from "react-redux";
import { addData } from "./postSlice";

function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addData({
        id: Math.random(),
        title,
        body,
      })
    );
    setTitle("");
    setBody("");
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" value={title} />
      <textarea onChange={handleBodyChange} value={body} />
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </form>
  );
}

export default PostForm;
