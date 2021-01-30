import React, { useEffect, useState } from "react";
import "./App.css";
import { CommentInterface } from "./features/comments/Comment";
import { CommentList } from "./features/comments/CommentList";
import { CreateComment } from "./features/comments/CreateComment";

function App() {
  const [comments, setComments] = useState<CommentInterface[]>([]);

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

  const handleCreatedComment = (data: any) => {
    setComments([data.comment, ...comments]);
  };

  return (
    <div className="App">
      <div className="Comments">
        <CreateComment onCommentCreated={handleCreatedComment} />
        <CommentList comments={comments}></CommentList>
      </div>
    </div>
  );
}

export default App;
