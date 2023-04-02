import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeData, updateData } from "./postSlice";

function ListItem({ id, title, body }) {
  const [edit, setEdit] = useState(false);
  const [formTitle, setTitle] = useState("");
  const [formBody, setBody] = useState("");

  const dispatch = useDispatch();

  const handleEdit = () => {
    setEdit(true);
    setTitle(title);
    setBody(body);
  };

  const handleCancle = () => {
    setEdit(false);
    setTitle("");
    setBody("");
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      updateData({
        id,
        title: formTitle,
        body: formBody,
      })
    );
    setEdit(false);
  };

  const handleDelete = (id) => {
    dispatch(removeData(id));
  };

  return (
    <div>
      {edit ? (
        <form className="post-form" onSubmit={handleSubmit}>
          <input onChange={handleTitleChange} type="text" value={formTitle} />
          <textarea onChange={handleBodyChange} value={formBody} />
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
          <button onClick={handleCancle}>cancel</button>
        </form>
      ) : (
        <>
          <button onClick={handleEdit}>edit</button>
          <button onClick={() => handleDelete(id)}>delete</button>
          <h3>{title}</h3>
          <p>{body}</p>
        </>
      )}
    </div>
  );
}

export default ListItem;
