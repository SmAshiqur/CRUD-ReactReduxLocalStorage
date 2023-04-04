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
    <div className="w-full flex justify-center">
      <form
        className="post-form bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            type="text"
            value={title}
          />
        </div>

        <div className="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            className="shadow appearance-none border border-blue-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleBodyChange}
            value={body}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSubmit}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
