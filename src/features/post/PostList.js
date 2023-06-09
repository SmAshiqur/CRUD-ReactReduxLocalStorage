import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";
import ListItem from "./ListItem";

function PostList() {
  const dispatch = useDispatch();
  const postSelector = useSelector((state) => state.post);
  const { data, status } = postSelector;

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      {status === "loading" && <h1>loading</h1>}
      {status === "success" &&
        data.map((d) => (
          <ListItem key={d.id} id={d.id} title={d.title} body={d.body} />
        ))}
      {status === "error" && <h1>Failed to load data</h1>}
    </div>
  );
}

export default PostList;
