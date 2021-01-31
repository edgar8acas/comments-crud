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

CommentController.put("/:id", async (req, res, next) => {
  const {
    params: { id },
    body,
  } = req;
  const entityManager = getManager();
  try {
    const comment = await entityManager.save(Comment, {
      id: Number(id),
      ...body,
    });
    return res.json({ comment });
  } catch (error) {
    return next(error);
  }
});

CommentController.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  const entityManager = getManager();
  try {
    const result = await entityManager.delete(Comment, id);
    return res.json({ result });
  } catch (error) {
    return next(error);
  }
});

export default CommentController;
