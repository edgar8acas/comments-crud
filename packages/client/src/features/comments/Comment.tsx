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

export const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <div className="Comment">
      <h4>{comment.author}</h4>
      <p>{comment.description}</p>
      <div className="Comment-actions">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};
