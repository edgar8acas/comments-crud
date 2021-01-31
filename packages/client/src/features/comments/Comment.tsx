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
}

type Mode = "read" | "edit";

export const Comment: React.FC<CommentProps> = ({
  comment,
  onCommentEditted,
}) => {
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
    commentDescription = (
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
      {commentDescription}
      <div className="Comment-actions">{commentActions}</div>
    </div>
  );
};
