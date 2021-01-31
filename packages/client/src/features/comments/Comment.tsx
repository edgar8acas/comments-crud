import * as React from "react";
import "./Comment.css";
import { EditComment } from "./EditComment";
export interface CommentInterface {
  id: number;
  description: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CommentProps {
  comment: CommentInterface;
  onCommentEditted: (comment: CommentInterface) => void;
  onCommentDelated: (comment: CommentInterface) => void;
}

type Mode = "read" | "edit";

export const Comment: React.FC<CommentProps> = ({
  comment,
  onCommentEditted,
  onCommentDelated,
}) => {
  const [mode, setMode] = React.useState<Mode>("read");

  const deleteComment = () => {
    fetch(`http://localhost:5000/api/comments/${comment.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((res) => {
        return res.ok ? res.json() : null;
      })
      .then((data) => {
        onCommentDelated(comment);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let commentBody;
  let commentActions;
  if (mode === "read") {
    commentBody = <p className="Comment-description">{comment.description}</p>;
    commentActions = (
      <>
        <button onClick={() => setMode("edit")}>Edit</button>
        <button onClick={deleteComment}>Delete</button>
      </>
    );
  } else {
    commentBody = (
      <EditComment
        commentToEdit={comment}
        onCommentEditted={onCommentEditted}
        onCloseEdition={() => setMode("read")}
      />
    );
  }

  return (
    <div className="Comment">
      <h4>{comment.author}</h4>
      {commentBody}
      <div className="Comment-actions">{commentActions}</div>
    </div>
  );
};
