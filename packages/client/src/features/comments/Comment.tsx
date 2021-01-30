import * as React from "react";
import "./Comment.css";
export interface CommentInterface {
  id: number;
  description: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CommentProps {
  comment: CommentInterface;
}

type Mode = "read" | "edit";

export const Comment: React.FC<CommentProps> = ({ comment }) => {
  const [mode, setMode] = React.useState<Mode>("read");

  let commentDescription;
  let commentActions;
  if (mode === "read") {
    commentDescription = <p>{comment.description}</p>;
    commentActions = (
      <>
        <button onClick={() => setMode("edit")}>Edit</button>
        <button>Delete</button>
      </>
    );
  } else {
    commentDescription = <textarea value={comment.description}></textarea>;
    commentActions = (
      <>
        <button onClick={() => setMode("read")}>Cancel</button>
        <button>Save</button>
      </>
    );
  }

  return (
    <div className="Comment">
      <h4>{comment.author}</h4>
      {commentDescription}
      <div className="Comment-actions">{commentActions}</div>
    </div>
  );
};
