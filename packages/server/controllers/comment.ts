import { Router } from "express";
import { getManager } from "typeorm";
import { Comment } from "../entities/Comment";

const CommentController: Router = Router();

CommentController.post("/", async (req, res, next) => {
  const { body } = req;
  const entityManager = getManager();
  const created = entityManager.create(Comment, body);
  try {
    const comment = await entityManager.save(created);
    return res.json({ comment });
  } catch (error) {
    return next(error);
  }
});

CommentController.get("/", async (req, res, next) => {
  const entityManager = getManager();
  const comments = await entityManager.find(Comment);

  return res.status(200).json({ comments });
});

export default CommentController;
