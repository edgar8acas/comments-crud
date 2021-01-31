import React, { useEffect, useState } from "react";
import "./App.css";
import { CommentInterface, Comment } from "./features/comments/Comment";
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

  const handleCommentCreated = (data: any) => {
    setComments([data.comment, ...comments]);
  };

  const handleCommentEditted = (edited: CommentInterface) => {
    const index = comments.findIndex((comment) => comment.id === edited.id);
    const updatedComments = [...comments];
    updatedComments[index] = edited;
    setComments(updatedComments);
  };

  return (
    <div className="App">
      <div className="Comments">
        <CreateComment onCommentCreated={handleCommentCreated} />
        <CommentList
          comments={comments}
          renderedComment={(comment) => (
            <Comment
              comment={comment}
              key={comment.id}
              onCommentEditted={handleCommentEditted}
            />
          )}
        ></CommentList>
      </div>
    </div>
  );
}

export default App;
