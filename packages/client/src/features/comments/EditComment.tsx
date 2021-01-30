import * as React from "react";
import { CommentInterface } from "./Comment";
import "./EditComment.css";

export interface EditCommentProps {
  onCommentEditted?: (comment: any) => void;
  onCancelEdition?: () => void;
  commentToEdit: CommentInterface;
}

export const EditComment: React.FC<EditCommentProps> = ({
  onCommentEditted,
  onCancelEdition,
  commentToEdit,
}) => {
  const [comment, setComment] = React.useState<CommentInterface | any>(
    commentToEdit
  );

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/comments", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(comment),
    })
      .then((res) => {
        return res.ok ? res.json() : {};
      })
      .then((data) => {
        setComment({ description: "" });
        if (onCommentEditted !== undefined) onCommentEditted(data);
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
    <div className="EditComment">
      <form onSubmit={handleSubmit} className="EditComment-form">
        <textarea
          value={comment.description}
          rows={5}
          onChange={handleChange}
          name="description"
        />
        <div className="Comment-actions">
          <button type="button" onClick={onCancelEdition}>
            Cancel
          </button>
          <button>Save</button>
        </div>
      </form>
    </div>
  );
};
