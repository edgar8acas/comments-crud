import * as React from "react";
import "./CommentList.css";
import { Comment, CommentInterface } from "./Comment";

export interface CommentListProps {
  comments: CommentInterface[];
}

export const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </div>
  );
};
