import * as React from "react";
import { CommentInterface } from "./Comment";

export const CreateComment: React.FC<{}> = () => {
  const [comment, setComment] = React.useState<CommentInterface | any>({
    description: "",
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    fetch("http://localhost:5000/api/comments", {
      method: "POST",
      body: comment,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  return (
    <div className="CreateComment">
      <form onSubmit={handleSubmit}>
        <label htmlFor="description">Description</label>
        <textarea
          value={comment.description}
          onChange={handleChange}
          name="description"
        />
        <button>Create</button>
      </form>
    </div>
  );
};
