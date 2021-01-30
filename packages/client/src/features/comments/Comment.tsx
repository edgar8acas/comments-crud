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
      <h3>{comment.author}</h3>
      <p>{comment.description}</p>
    </div>
  );
};
