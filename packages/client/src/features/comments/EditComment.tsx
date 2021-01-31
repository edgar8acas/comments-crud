import * as React from "react";
import { CommentInterface } from "./Comment";
import "./EditComment.css";

export interface EditCommentProps {
  onCommentEditted: (comment: CommentInterface) => void;
  onCloseEdition: () => void;
  commentToEdit: CommentInterface;
}

export const EditComment: React.FC<EditCommentProps> = ({
  onCommentEditted,
  onCloseEdition,
  commentToEdit,
}) => {
  const [comment, setComment] = React.useState<CommentInterface | any>(
    commentToEdit
  );

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    fetch(`http://localhost:5000/api/comments/${commentToEdit.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(comment),
    })
      .then((res) => {
        return res.ok ? res.json() : null;
      })
      .then((data) => {
        setComment({ description: "" });
        onCommentEditted(data.comment as CommentInterface);
        onCloseEdition();
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
          rows={2}
          onChange={handleChange}
          name="description"
        />
        <div className="Comment-actions">
          <button type="button" onClick={onCloseEdition}>
            Cancel
          </button>
          <button>Save</button>
        </div>
      </form>
    </div>
  );
};
