import React, { useEffect, useState } from "react";
import "./App.css";
import { CommentList } from "./features/comments/CommentList";
import { CreateComment } from "./features/comments/CreateComment";

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      try {
        const data = await fetch("http://localhost:5000/api/comments");
        const { comments } = await data.json();
        setComments(comments);
      } catch (err) {
        console.log(err);
      }
    };
    getComments();
  }, []);

  return (
    <div className="App">
      <CreateComment />
      <CommentList comments={comments}></CommentList>
    </div>
  );
}

export default App;
