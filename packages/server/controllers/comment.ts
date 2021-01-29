import { Router } from "express";
import { getManager } from "typeorm";
import { Comment } from "../entities/Comment";

const CommentController: Router = Router();

CommentController.post("/", async (req, res, next) => {
  const { body } = req;

  const entityManager = getManager();
  const created = entityManager.create(Comment, body);
  const saved = await entityManager.save(created);
  return res.status(200).json({ saved });
});

CommentController.get("/", async (req, res, next) => {
  const entityManager = getManager();
  const comments = await entityManager.find(Comment);

  return res.status(200).json({ comments });
});

export default CommentController;
