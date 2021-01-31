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
      {comments
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .map((comment) => renderedComment(comment))}
    </div>
  );
};
