import * as React from "react";
import { CommentInterface } from "./Comment";
import "./CreateComment.css";

export interface CreateCommentProps {
  onCommentCreated?: (comment: any) => void;
}

export const CreateComment: React.FC<CreateCommentProps> = ({
  onCommentCreated,
}) => {
  const [comment, setComment] = React.useState<CommentInterface | any>({
    description: "",
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(comment),
    })
      .then((res) => {
        return res.ok ? res.json() : {};
      })
      .then((data) => {
        if (onCommentCreated !== undefined) onCommentCreated(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setComment({ ...comment, [name]: value });
  };

  return (
    <div className="CreateComment">
      <form onSubmit={handleSubmit} className="CreateComment-form">
        <label htmlFor="description">Description</label>
        <textarea
          value={comment.description}
          rows={5}
          onChange={handleChange}
          name="description"
        />
        <button className="CreateComment-create">Create</button>
      </form>
    </div>
  );
};
