import * as React from "react";
import { Comment, CommentInterface } from "./Comment";

export interface CommentListProps {
  comments: CommentInterface[];
}

export const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </>
  );
};
