import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeData, updateData } from "./postSlice";
import { TiEdit } from "react-icons/ti";
import { FiDelete } from "react-icons/fi";

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
    <div className="w-full flex justify-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          {edit ? (
            <form className="post-form" onSubmit={handleSubmit}>
              <input
                onChange={handleTitleChange}
                type="text"
                value={formTitle}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <textarea
                onChange={handleBodyChange}
                value={formBody}
                className="shadow appearance-none border border-blue-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline mt-2"
              />
              <div className="flex justify-evenly">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Save
                </button>
                <button
                  onClick={handleCancle}
                  className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              <div className="flex justify-end">
                <button onClick={handleEdit}>
                  <TiEdit />
                </button>
                <button onClick={() => handleDelete(id)}>
                  <FiDelete />
                </button>
              </div>

              <div className="font-bold text-xl mb-2">{title}</div>
              <p className="text-gray-700 text-base">{body}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListItem;
