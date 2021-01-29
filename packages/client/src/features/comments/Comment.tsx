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
    <div style={{}}>
      <h3>{comment.author}</h3>
      <p>{comment.description}</p>
    </div>
  );
};
