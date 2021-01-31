import * as React from "react";
import "./CommentList.css";
import { CommentInterface } from "./Comment";

export interface CommentListProps {
  comments: CommentInterface[];
  renderedComment: (comment: CommentInterface) => React.ReactNode;
}

export const CommentList: React.FC<CommentListProps> = ({
  comments,
  renderedComment,
}) => {
  return (
    <div className="CommentList">
      {comments.map((comment) => renderedComment(comment))}
    </div>
  );
};
